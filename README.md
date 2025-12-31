# 🛸 UFO Sighting Predictor

A machine learning-powered web application that predicts the country where a UFO sighting was most likely reported based on duration, latitude, and longitude data.

![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)

## 📋 Overview

This web application uses a trained logistic regression model to predict which country a UFO sighting was reported in, based on three key features:
- **Duration** (in seconds, 0-60)
- **Latitude** (geographical coordinate)
- **Longitude** (geographical coordinate)

The model can predict sightings from **5 countries**: Australia, Canada, Germany, United Kingdom, and United States.

## ✨ Features

- 🌐 **Interactive Web Interface**: Clean, modern UI with gradient text effects and smooth animations
- 🤖 **Machine Learning Prediction**: Trained logistic regression model using scikit-learn
- 📊 **Real-time Results**: Instant predictions based on user input
- 📱 **Responsive Design**: Works seamlessly across desktop and mobile devices
- ℹ️ **Educational Content**: Includes information about the model and how to use it

## 🛠️ Technologies Used

### Backend
- **Python 3.x**: Core programming language
- **Flask**: Lightweight web framework for routing and serving the application
- **scikit-learn**: Machine learning library for model training and prediction
- **NumPy**: Numerical computing library for array operations
- **Pandas**: Data manipulation and analysis

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients, animations, and glassmorphism effects
- **JavaScript**: Interactive button effects and dynamic user interactions
- **Google Fonts**: Inter and Playfair Display for premium typography

### Machine Learning
- **Model**: Logistic Regression classifier
- **Training Data**: UFO Sightings dataset from Kaggle
- **Features**: Duration (seconds), Latitude, Longitude
- **Target**: Country of reported sighting (5 classes)

## 📁 Project Structure

```
ufo-webapp/
├── app/
│   ├── app.py                 # Main Flask application
│   ├── requirements.txt       # Python dependencies
│   ├── static/
│   │   ├── css/              # Stylesheets (global, layout, components)
│   │   └── js/               # JavaScript components (buttons, background)
│   └── templates/            # HTML templates (base, landing, index, about)
├── model/
│   └── ufo-model.pkl         # Trained ML model (pickled)
├── data/
│   └── raw/                  # Raw dataset storage
├── train.ipynb               # Jupyter notebook for model training
└── README.md                 # This file
```

## 🚀 Installation

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ufo-webapp
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   cd app
   pip install -r requirements.txt
   ```

## ▶️ Running the Application

1. **Navigate to the app directory**
   ```bash
   cd app
   ```

2. **Start the Flask development server**
   ```bash
   python app.py
   ```

3. **Open your browser** and navigate to:
   ```
   http://127.0.0.1:5000
   ```

4. **Use the application**
   - Visit the landing page at `/`
   - Navigate to the prediction form at `/prediction`
   - Enter duration (seconds), latitude, and longitude
   - Click "Predict!" to see which country the sighting likely occurred in

## 📖 Usage Example

To predict a UFO sighting in New York City:

1. Navigate to `/prediction`
2. Enter the following values:
   - **Seconds**: `30`
   - **Latitude**: `40.7128`
   - **Longitude**: `-74.0060`
3. Click **Predict!**
4. Result: **United States** 🇺🇸

## 🧠 Model Training

The model was trained using the `train.ipynb` Jupyter notebook. To retrain the model:

1. Open `train.ipynb` in Jupyter Notebook or JupyterLab
2. Ensure the UFO sightings dataset is in the `data/raw/` directory
3. Run all cells to train the logistic regression model
4. The trained model will be saved as `model/ufo-model.pkl`

## 🙏 Acknowledgments

Thank you to my parents for always believing in me :D