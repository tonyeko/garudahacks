from flask import Flask
from flask_pymongo import pymongo
from app import app
from os import environ

CONNECTION_STRING = f"mongodb+srv://{environ.get('UNAME')}:{environ.get('PASSWORD')}@cluster0-yjgsk.mongodb.net/garudahacks?retryWrites=true&w=majority"

client = pymongo.MongoClient(CONNECTION_STRING)

db = client.get_database('garudahacks')

prescriptions = pymongo.collection.Collection(db, 'prescriptions')
users = pymongo.collection.Collection(db, 'users')
