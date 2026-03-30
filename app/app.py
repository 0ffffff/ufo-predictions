import numpy as np
from flask import Flask, request, render_template
import pickle

app = Flask(__name__)
model = pickle.load(open("../model/ufo-model.pkl", "rb"))

@app.route("/")
def landing():
    return render_template("landing.html")

@app.route("/prediction")
def prediction_form():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        features = [float(x) for x in request.form.values()]
    except ValueError:
        return render_template(
            "index.html",
            prediction_text="Invalid input. Use numeric values for all fields.",
            country="Please check your values and try again.",
        ), 400

    final_features = [np.array(features)]
    prediction = model.predict(final_features)
    output = int(prediction[0])

    countries = ['Australia', 'Canada', 'Germany', 'United Kingdom', 'United States']
    if output < 0 or output >= len(countries):
        return render_template(
            "index.html",
            prediction_text="Model returned an unexpected class index.",
            country="Prediction unavailable right now.",
        ), 500

    country = countries[output]

    return render_template("index.html", prediction_text="Predicted sighting in:", country=country)

if __name__ == "__main__":
    app.run()