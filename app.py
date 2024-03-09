from flask import Flask, render_template, request, jsonify
import random
import os
import google.generativeai as genai
import speech_recognition as sr
import pyttsx3
import smtplib
import json

model = genai.GenerativeModel('gemini-pro')

os.environ['GOOGLE_API_KEY'] = "AIzaSyBXj7g61Uv2RAC4_V6O0zuM-x-7wS5kbhY"
genai.configure(api_key = os.environ['GOOGLE_API_KEY'])

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('chat.html')

@app.route("/chatget", methods=["POST"])
def chat():
    data = request.json
    msg = data["msg"]
    response = get_chat_response(msg)
    return jsonify(response=response)

def get_chat_response(text):
    response = model.generate_content(text)
    return response.text

@app.route("/callget", methods=["POST"])
def callchat():
    r = sr.Recognizer()
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    # print(voices[1].id)
    engine.setProperty('voice', voices[0].id)
    engine.setProperty('rate', 150)
    my_dictionary = {}


    def speak(Audio):
        engine.say(Audio)
        engine.runAndWait()
    speak("how may I help you?")

    with sr.Microphone() as source2:
        # speak("silence please, calibrating background noise")
        r.adjust_for_ambient_noise(source2, duration=0.1)
        # speak("calibrated, now speak")
        speak("say one if you want to register an appointment")

        # listen for user input
        audio2 = r.listen(source2)

        # using google to recognize audio
        MyText = r.recognize_google(audio2)
        MyText = MyText.lower()

    if MyText == 'one':
        speak("Sure,could you please tell us your name?")

        with sr.Microphone() as source2:
            # speak("silence please, calibrating background noise")
            r.adjust_for_ambient_noise(source2, duration=0.1)
            # speak("calibrated, now speak")
            audio2 = r.listen(source2)
            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()
            my_dictionary["name"] = MyText

        speak("What is your age?")

        with sr.Microphone() as source2:
            # speak("silence please, calibrating background noise")
            r.adjust_for_ambient_noise(source2, duration=0.1)
            # speak("calibrated, now speak")
            audio2 = r.listen(source2)
            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()
        
        speak("Are you male or female?")

        with sr.Microphone() as source2:
            # speak("silence please, calibrating background noise")
            r.adjust_for_ambient_noise(source2, duration=0.1)
            # speak("calibrated, now speak")
            audio2 = r.listen(source2)
            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()
            my_dictionary["gender"] = MyText

        speak("could you please describe your problem?")

        with sr.Microphone() as source2:
            # speak("silence please, calibrating background noise")
            r.adjust_for_ambient_noise(source2, duration=0.1)
            # speak("calibrated, now speak")
            audio2 = r.listen(source2)
            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()

        speak("you would be notified about your appointment through SMS and email, Thank you for contacting us")

        response = model.generate_content(MyText + "on a scale of 1 to 5 where 5 represents quite severe and 1 represents very less severe , much would you rate this statement...just prompt a single number no additional info...just single number")
        my_dictionary["symptoms"] = MyText
        my_dictionary["severity"] = response
        #return response

        # speak(response)

    json_data = json_dumps(my_dictionary)
    return json_data


if __name__ == '__main__':
    app.run()
