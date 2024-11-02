import joblib
from tensorflow.keras.models import load_model
import numpy as np

 
def get_prediction(data):
    loaded_model = load_model('austim_all_datasets_model_trained.keras')
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