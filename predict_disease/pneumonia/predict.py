import cv2
import numpy as np
from tensorflow.keras.models import load_model
import os

# Set up model path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'pneumonia_model_Final_Retrain.keras')
model = load_model(MODEL_PATH)

# Prediction 
def predict_image(image_path):
    if not os.path.exists(image_path):
        print(f"File does not exist: {image_path}")
        return None

    try:
        img = cv2.imread(image_path)
        img = cv2.resize(img, (150, 150))
        img = img / 255.0
        img = np.expand_dims(img, axis=0)

        prediction = model.predict(img)[0][0]
        result = "Pneumonia" if prediction > 0.5 else "Normal"
        confidence = float(prediction)

        print(f"Prediction: {result} (Confidence: {confidence:.2f})")
        return {"result": result, "confidence": confidence}

    except Exception as e:
        
        return None


if __name__ == "__main__":
    test_image_path = os.path.join(BASE_DIR, 'sample_xray.jpg')  
    predict_image(test_image_path)
