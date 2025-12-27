# Handwritten Digit Detection AI

An **offline handwritten digit recognition system** built using **Node.js, Express, EJS, and TensorFlow.js**.  
Users draw a digit (0–9) on a canvas, and the system predicts the digit locally using a CNN trained on the **MNIST dataset**.

> 🚫 No internet  
> 🚫 No cloud APIs  
> ✅ Fully offline AI

---

## Features
- Offline handwritten digit detection
- CNN trained on MNIST dataset
- Canvas-based drawing interface
- Fast local inference using TensorFlow.js
- Clean MVC Express architecture
- Hackathon & demo ready

---

## Tech Stack
- Node.js
- Express.js
- EJS (Frontend)
- TensorFlow.js (Node backend)
- HTML Canvas
- MNIST Dataset

---

## Project Structure
```
handwritten-digit-ai/
└── server/
├── index.js
├── routes/
├── controllers/
├── utils/
├── model/ # trained model saved here
├── views/
└── public/
```
---

## Installation

### Clone the repository
```bash
git clone https://github.com/notysozu/Handwritten-Digit-Detection-AI.git
cd handwritten-digit-ai
```

### Install dependencies
```bash
npm install
```

### Training the Model (IMPORTANT)

The model is not included in Git to keep the repo clean.
You must train it once before running the app.
```bash
node server/model/trainModel.js
```
This will:

1. Load the MNIST dataset
2. Train a high-accuracy CNN (~99.5%)
3. Save the model locally to:

### Start the application 
```bash
node index.js
```
