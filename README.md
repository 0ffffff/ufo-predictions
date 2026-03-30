# UFO Sighting Predictor

A machine learning web app that predicts which country a UFO sighting was most likely reported in, using duration (seconds), latitude, and longitude.

![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)

## Overview

The app serves a **logistic regression** model trained in `train.ipynb`. Inputs are:

- **Duration** in seconds (training data uses sightings between **1 and 60** seconds, inclusive)
- **Latitude** and **longitude**

The model predicts one of **five** countries: Australia, Canada, Germany, United Kingdom, and United States. Class labels follow scikit-learn `LabelEncoder` ordering on the ISO-style country codes in the dataset (`au`, `ca`, `de`, `gb`, `us`), which matches the ordered list used in `app/app.py`.

## Features

- Web UI for entering coordinates and duration and viewing the predicted country
- Pretrained model loaded from `model/ufo-model.pkl`
- Responsive layout and `/`, `/prediction`, and `/about` routes

## Technologies

### Backend

- **Python 3.x**
- **Flask** for HTTP routing and templates
- **scikit-learn** for inference (and training in the notebook)
- **NumPy** for feature vectors
- **Pandas** for training data prep in the notebook

### Frontend

- HTML templates under `app/templates/`
- CSS and JavaScript under `app/static/`
- **Google Fonts** (Inter and Playfair Display)

### Machine learning

- **Algorithm**: logistic regression (`solver='lbfgs'`, `max_iter=1000` in the notebook)
- **Data**: Kaggle-style UFO sightings CSV (see `data/raw/ufos.csv`)
- **Features**: seconds, latitude, longitude
- **Target**: country (multiclass)

## Project structure

```
ufo-webapp/
├── app/
│   ├── app.py              # Flask app (loads ../model/ufo-model.pkl)
│   ├── requirements.txt
│   ├── static/             # CSS, JS, images
│   └── templates/          # base, landing, index, about, components
├── model/
│   └── ufo-model.pkl       # Pickled sklearn model (run train.ipynb to regenerate)
├── data/
│   └── raw/
│       └── ufos.csv        # Training CSV (used by train.ipynb)
├── train.ipynb             # Training notebook
└── README.md
```

## Installation

### Prerequisites

- Python 3.7 or higher
- pip

### Setup

1. Clone the repository and enter the project directory.

2. Create and activate a virtual environment (recommended):

   ```bash
   python3 -m venv venv
   source venv/bin/activate   # Windows: venv\Scripts\activate
   ```

3. Install app dependencies:

   ```bash
   cd app
   pip install -r requirements.txt
   ```

To run `train.ipynb`, install the same stack plus **matplotlib** (and Jupyter) in that environment, or add them ad hoc for the notebook.

## Running the app

1. From the repository root:

   ```bash
   cd app
   python app.py
   ```

2. Open `http://127.0.0.1:5000` (Flask default).

3. Routes:

   - `/` — landing page
   - `/prediction` — form (POSTs to `/predict`)
   - `/about` — model and project notes

## Usage example

Example inputs for a New York City area point:

1. Go to `/prediction`.
2. Enter **Seconds**: `30`, **Latitude**: `40.7128`, **Longitude**: `-74.0060`.
3. Submit the form.
4. The app should predict **United States** (coordinates are highly informative for this task).

## Retraining the model

1. Open `train.ipynb` in Jupyter or VS Code. **Run it with the working directory set to the repository root** so `data/raw/ufos.csv` and `model/ufo-model.pkl` resolve correctly.
2. Run all cells. The notebook filters rows (non-null country, duration between 1 and 60 seconds), encodes countries, trains logistic regression, evaluates on a test split, and writes **`model/ufo-model.pkl`**.
3. Restart the Flask app if it is already running so it picks up a replaced model file.

## Acknowledgments

Thanks to the Kaggle UFO sightings dataset contributors. Personal thanks to family for support on this project.
