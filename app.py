from flask import Flask, render_template, request, jsonify

import os
import openai
import langchain
from langchain_openai import OpenAI
os.environ['OPENAI_API_KEY'] = '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'
llm = OpenAI(temperature=0.0)


app = Flask(__name__)

@app.route("/")
def index():
    return render_template('front-end/src/App.jsx')


@app.route("/get", methods=["GET", "POST"])
def chat():
    msg = request.form["msg"]
    input = msg
    return get_Chat_response(input)


def get_Chat_response(text):

    for step in range(5):
        response = llm.invoke(text) 
        return response


if __name__ == '__main__':
    app.run()

def new1():
    return None