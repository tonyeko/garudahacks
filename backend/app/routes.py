from app import app
from flask import request
from app import db
from app.ocr import ocr
from bson.json_util import dumps
from bson import ObjectId
from werkzeug.utils import secure_filename
from flask_cors import cross_origin
from flask import jsonify

# define a folder to store and later serve the images
UPLOAD_FOLDER = 'images/'

# allow files of a specific type
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

# function to check the file extension


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def index():
    return {'Hello': 'World'}


@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'GET':
        return {'user': 'test'}


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
        for data in ocr(sfname):
            result[data] = list(map(lambda row: {i: str(row[i]) if isinstance(
                row[i], ObjectId) else row[i] for i in row if i != 'name'}, db.db.prescriptions.find({"name": data})))[0]
        return result


@app.route("/prescription")
@cross_origin(origin='*', headers=['Content-Type'])
def prescription():
    query = request.args.get('search')
    result = db.db.prescriptions.find({"name": query}) if query else db.db.prescriptions.find()
    result = list(map(lambda row: {i: str(row[i]) if isinstance(
                row[i], ObjectId) else row[i] for i in row}, result))
    return jsonify(result)
