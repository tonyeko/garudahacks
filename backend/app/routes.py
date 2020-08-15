from app import app
from flask import request
from app import db
from app import ocr
from bson.json_util import dumps
from werkzeug.utils import secure_filename
from flask_cors import cross_origin

# define a folder to store and later serve the images
UPLOAD_FOLDER = '/images/'

# allow files of a specific type
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

# function to check the file extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    return {'data':['Hello', 'World']}


@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'GET':
        return {'user': 'test'}
    

@app.route('/ocr', methods=['POST'])
@cross_origin()
def process_ocr():
    if 'file' not in request.files or f.filename == '':
        return {'status': 204}
    f = request.files['file']
    if f and allowed_file(f.filename):
        sfname = 'images/'+str(secure_filename(f.filename))
        f.save(sfname)
        return {'data': ocr(sfname)}    
    

@app.route("/prescription")
@cross_origin()
def prescription():
    query = request.args.get('search')
    result = db.db.prescriptions.find({"name": query})
    return dumps(result)
