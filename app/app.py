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
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    output = prediction[0]

    countries = ['Australia', 'Canada', 'Germany', 'United Kingdom', 'United States']
    country = countries[output]

    return render_template("index.html", prediction_text="Predicted sighting in:", country=country)

if __name__ == "__main__":
    app.run()