from fastapi import FastAPI
import joblib
from tensorflow.keras.models import load_model
import numpy as np
from typing import Dict
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
class PredictionData(BaseModel):
    A1_Score: int
    A2_Score: int
    A3_Score: int
    A4_Score: int
    A5_Score: int
    A6_Score: int
    A7_Score: int
    A8_Score: int
    A9_Score: int
    A10_Score: int
    age: int
    gender: int
    ethnicity: int
    jundice: int
    austim: int
    contry_of_res: int
    used_app_before: int
    result: int
    relation: int
 
def make_prediction(data):
    loaded_model = load_model('austim_test_model.keras')
    scaler = joblib.load('scaler.pkl')
    arr=np.array(data)
    arr=arr.reshape(1,-1)
    x = scaler.transform(arr)
   
    pred=loaded_model.predict(x)
    if pred > 0.5:
        pred="Yes"
    else:
        pred = "No"
    return pred


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, you can specify specific origins like ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (POST, GET, etc.)
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.post("/api/get_prediction")
async def get_prediction(data: PredictionData):
    
    values_list = list(data.dict().values())
    pred = make_prediction(values_list)
    return {"ASD PREDICTION": pred}