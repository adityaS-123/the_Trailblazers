from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_openai import OpenAI
import os
# Set your OpenAI API key
os.environ['OPENAI_API_KEY'] = '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'
llm = OpenAI(temperature=0.0)

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template('front-end/src/App.jsx')

@app.route("/get", methods=["POST"])
def chat():
    try:
        data = request.get_json()  # Access JSON data from the request
        msg = data["msg"]  # Assuming the key in your JSON is "msg"
        
        # Process the msg and generate a response
        response = get_chat_response(msg)
        
        return jsonify({"response": response})

    except Exception as e:
        return jsonify({"error": str(e)})

def get_chat_response(text):
    responses = []

    for step in range(5):
        response = llm.invoke(text)
        responses.append(response)

    return responses


if __name__ == '__main__':
    app.run()
