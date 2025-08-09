# Pneumonia Detection using Deep Learning

This project is a **beginner-level AI model** trained on a small dataset of **Chest X-Ray Images** to detect signs of pneumonia.  
It serves as a **quick preliminary tool** for doctors to get an overview in high-patient or large-crowd situations, but **it is not a substitute for professional medical diagnosis**.

---

## ⚠ Disclaimer
This model is an early-stage, beginner-level AI trained on a small dataset of chest X-ray images. It works by detecting white spots in the chest area that may indicate pneumonia, which creates a baseline for doctors.  
If you upload images that are **not chest X-rays**, the results may be inaccurate or unpredictable.  
Always consult a qualified doctor for confirmation and treatment.

---

## 📌 Project Flow

1. **Dataset Collection**  
   - Dataset used: [Chest X-Ray Images (Pneumonia) from Kaggle](https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia)
   - Data preprocessing & augmentation applied for better generalization.

2. **Model Architecture**  
   - Transfer Learning using pre-trained CNN (e.g., MobileNetV2 / EfficientNet).
   - Custom dense layers for classification.

3. **Training**  
   - Used TensorFlow/Keras with data augmentation.
   - Evaluated with validation and test datasets.

4. **Frontend Integration (Optional)**  
   - Built a simple UI to upload images and view predictions in real-time.
   - Model loaded in browser using `TensorFlow.js`.

---

## 🛠 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/pneumonia-detection.git
cd pneumonia-detection
```
Inside a Python folder add
```bash
pip freeze > requirements.txt
pip install -r requirements.txt
# cd into the directory
python manage.py runserver
```
Inside the Frontend folder add
```bash
npm install
npm i react-scrolls
npm i antd @antdesigns/icond
npm run dev
```

### View


<img width="1920" height="1020" alt="Vite + React - Google Chrome 09-08-2025 11_04_12" src="https://github.com/user-attachments/assets/b304eb86-f253-40bf-b6fe-662e5d2845a9" /><img width="1920" height="1020" alt="Vite + React - Google Chrome 09-08-2025 11_04_03" src="https://github.com/user-attachments/assets/a09536ad-3e7f-4dd9-bd94-121453dfda0e" />
<img width="1920" height="1020" alt="Vite + React - Google Chrome 09-08-2025 11_02_50" src="https://github.com/user-attachments/assets/322939b8-5e26-4f0e-9282-67049bc1060d" />

<img width="1920" height="1020" alt="Navbar jsx - Frontend - Visual Studio Code 09-08-2025 11_00_16" src="https://github.com/user-attachments/assets/5032c4d8-9c90-4b84-9ea4-78f1a852f911" />
<img width="1920" height="1020" alt="Vite + React - Google Chrome 09-08-2025 11_01_14" src="https://github.com/user-attachments/assets/38678fe2-e107-460c-b99f-1e254cd33df1" />
<img width="1920" height="1020" alt="Vite + React - Google Chrome 09-08-2025 11_01_31" src="https://github.com/user-attachments/assets/5743fd1a-bd68-4072-a931-1f71739b8e03" />
<img width="1920" height="1020" alt="Vite + React - Google Chrome 09-08-2025 11_01_55" src="https://github.com/user-attachments/assets/3b4c06c5-56bb-4ad3-afaa-d463e12efc53" />




