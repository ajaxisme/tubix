from flask import Flask, jsonify, request
from flask_cors import CORS
import get_lyrics

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Server is running"

@app.route('/getLyrics', methods=['GET'])
def getlyrics():
    #url = "http://www.azlyrics.com/lyrics/eminem/loseyourself.html"
    url = request.args.get("url")
    return jsonify({"lyrics": get_lyrics.get_lyrics(url)})

if __name__ == "__main__":
    app.run(debug=True)
