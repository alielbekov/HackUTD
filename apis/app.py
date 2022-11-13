import json
from flask import Flask, jsonify, request, abort
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from unidecode import unidecode

app = Flask(__name__)



@app.route('/getSentiment', methods=['POST'])
def query_records():
    if not request.json or not 'comment' in request.json:
        abort(400)
    comment = request.json['comment']
    analyzer = SentimentIntensityAnalyzer()
    vs = analyzer.polarity_scores(unidecode(comment))
    score = vs['compound']
    return jsonify({'score': score}), 201




@app.route('/')
def hello():
    return '<h1>Home Page!</h1>'


if __name__ == "__main__":
    app.run(debug=True)   