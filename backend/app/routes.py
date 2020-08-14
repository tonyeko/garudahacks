from app import app
from flask import request
from app import db
from app import ocr
from bson.json_util import dumps
from werkzeug import secure_filename

@app.route('/')
def index():
    return {'hello': 'world'}


@app.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == 'GET':
        return {'user': 'test'}
    

@app.route('/ocr', methods=['POST'])
def process_ocr():
    f = request.files['file']
    sfname = 'images/'+str(secure_filename(f.filename))
    f.save(sfname)
    return ocr(sfname)


@app.route("/prescription")
def prescription():
    query = request.args.get('search')
    result = db.db.prescriptions.find({"name": query})
    return dumps(result)
