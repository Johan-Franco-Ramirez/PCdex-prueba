from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "API PCDex Activa"

app.run(host="0.0.0.0", port=5000)