from app import app
from flask import request, jsonify
from app.db import db
from app.ocr import ocr
from bson.json_util import dumps
from bson import ObjectId
from werkzeug.utils import secure_filename
from flask_cors import cross_origin
import re
import json

# define a folder to store and later serve the images
UPLOAD_FOLDER = 'images/'

# allow files of a specific type
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

# function to check the file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/ocr', methods=['POST'])
@cross_origin(origin='*')
def process_ocr():
    f = request.files['file']
    if 'file' not in request.files or f.filename == '':
        return {'status': 204}
    f = request.files['file']
    if f and allowed_file(f.filename):
        sfname = UPLOAD_FOLDER+str(secure_filename(f.filename))
        f.save(sfname)
        result = {}
        prescript = []
        for data in ocr(sfname):
            if "Dr." not in data.capitalize():
                prescript.append(list(map(lambda row: {i: str(row[i]) if isinstance(
                    row[i], ObjectId) else row[i] for i in row}, db.prescriptions.find({"name": data.capitalize()})))[0])
            else: 
                result['doctor'] = data.title()
            result['prescriptions'] = prescript
        return jsonify(result)


@app.route("/prescription", methods=['GET'])
@cross_origin(origin='*')
def prescription():
    query = request.args.get('search')
    rgx = re.compile(f'.*{query}.*', re.IGNORECASE)  # compile the regex
    result = db.prescriptions.find(
        {"name": rgx}) if query else db.prescriptions.find()
    result = list(map(lambda row: {i: str(row[i]) if isinstance(
        row[i], ObjectId) else row[i] for i in row}, result))
    return jsonify(result)


@app.route('/prescription/<id>', methods=['PUT'])
@cross_origin(origin='*')
def update_stock(id):
    data = json.loads(request.data.decode())
    if data:
        db.prescriptions.update_one({'_id': ObjectId(id)}, {
            '$set': {'stock': data['stock']}
        })
        return {'status': 201}
    return {'status': 204}


@app.route("/doctor", methods=['GET'])
@cross_origin(origin='*')
def doctor():
    query = request.args.get('search')
    rgx = re.compile(f'.*{query}.*', re.IGNORECASE)
    result = db.doctors.find(
        {"name": rgx}) if query else db.doctors.find()
    result = list(map(lambda row: {i: str(row[i]) if isinstance(
        row[i], ObjectId) else row[i] for i in row}, result))
    return jsonify(result)


@app.route("/request", methods=['GET', 'POST'])
@cross_origin(origin='*')
def post_requestQuery():
    if request.method == 'GET':
        query = request.args.get('doctor')
        rgx = re.compile(f'.*{query}.*', re.IGNORECASE)
        result = db.requests.find(
            {"doctor": rgx}) if query else db.requests.find()
        result = list(map(lambda row: {i: str(row[i]) if isinstance(
            row[i], ObjectId) else row[i] for i in row}, result))
        return jsonify(result)
    data = json.loads(request.data.decode())
    if data:
        db.requests.insert_one(
            {"doctor": data['doctor'], "prescriptions": data['prescriptions']})
        return {'status': 201}
    return {'status': 204}
