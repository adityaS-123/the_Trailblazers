import React, { useState } from 'react';
import './index.css'; // Assuming you have a corresponding style.css file

function Chatbot() {
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const str_time = hour + ":" + minute;
        const rawText = event.target.elements.msg.value;

        const userHtml = (
            <div className="d-flex justify-content-end mb-4" key={messages.length}>
                <div className="msg_cotainer_send">
                    {rawText}
                    <span className="msg_time_send">{str_time}</span>
                </div>
                <div className="img_cont_msg">
                    <img height="20px" src="https://i.ibb.co/d5b84Xw/Untitled-design.png" className="rounded-circle user_img_msg" alt="user" />
                </div>
            </div>
        );

        setMessages([...messages, userHtml]);

        const response = await fetch('http://127.0.0.1:5000/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ msg: rawText }),
        });

        const data = await response.json();
        console.log(data);

        // ...

const botHtml = (
    <div className="d-flex justify-content-start mb-4" key={messages.length + 1}>
        <div className="img_cont_msg">
            <img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" className="rounded-circle user_img_msg" alt="bot" />
        </div>
        <div className="msg_cotainer">
            {data.response.map((item, index) => (
                <div key={index} className="bot-response">{item}</div>
            ))}
            <span className="msg_time">{str_time}</span>
        </div>
    </div>
);

// ...

        

        setMessages([...messages, botHtml]);
        event.target.elements.msg.value = ''; // Clear input field after submit
    };

    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
                <div className="col-md-8 col-xl-6 chat">
                    <div className="card">
                        <div className="card-header msg_head">
                            <div className="d-flex bd-highlight">
                                <div className="img_cont">
                                    <img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" className="rounded-circle user_img" alt="chatbot" />
                                    <span className="online_icon"></span>
                                </div>
                                <div className="user_info">
                                    <span>ChatBot</span>
                                    <p>Ask me anything!</p>
                                </div>
                            </div>
                        </div>
                        <div id="messageFormeight" className="card-body msg_card_body">
                            {messages.map((message, index) => (
                                <React.Fragment key={index}>{message}</React.Fragment>
                            ))}
                        </div>
                        <div className="card-footer">
                            <form onSubmit={handleSubmit} className="input-group" id="messageArea">
                                <input type="text" id="text" name="msg" placeholder="Type your message..." autoComplete="off" className="form-control type_msg" required />
                                <div className="input-group-append">
                                    <button type="submit" id="send" className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chatbot;
