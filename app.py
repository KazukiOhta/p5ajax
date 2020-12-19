from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/delta", methods=["POST"])
def delta():
    req = request.form
    state = int(req["state"])
    new_state = state+1
    res = {"state": new_state}
    return jsonify(res)

if __name__ == "__main__":
    app.run(host = "0.0.0.0", port = 8080, debug = False)
