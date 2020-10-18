import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/getRating/<placeId>')
def get_Rating(placeId):
    assert placeId == request.view_args['placeId']
    print(placeId)
    return {"placeId": placeId}

@app.route('/')
def home():
    return "HEllo worlds"


cred = credentials.Certificate("/Users/bradleywilson/Coding/ViRisk/virisk/backend/virisk-firebase-adminsdk-ghps9-7f6f1ffaed.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://virisk.firebaseio.com/'})

def updateLocationInfo(placeId, overall, a1, a2, a3):
    ref = db.reference('/locationData/' + placeId)
    if (ref.get() == None):
        print("is none")
        ref.set({"marcus": "hey"})
        

def storeUserData(placeId, overall, a1, a2, a3):
    ref = db.reference('/userResponse')
    data = riskData(placeId, overall, a1, a2, a3)
    ref.push(data)


def riskData(placeId, overall, area, mask, distancing):
    return {
        "placeId": placeId,
        "overall_rating": overall,
        "area_rating": area,
        "mask_wearing": mask,
        "social_distancing": distancing
    }

storeUserData("4016", 3.2, 3.5, 4.5, 8.0)
updateLocationInfo("4016", 3.2, 3.5, 4.5, 8.0)

print(riskData("4016", 3.2, 3.5, 4.5, 8.0))