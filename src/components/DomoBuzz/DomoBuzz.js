import React from 'react'

const DomoBuzz = ({messages, onAddMessage, onChange, message}) => {

    //console.log(messages, onAddMessage);
    return(
        <div className="domobuzz-content">
            <div className="buzz-header"><h2>buzz</h2></div>
            <div className="buzz-messages">
                {messages.map((message, index) =>
                <div key={index} className="individual-message">
                    <div className="user-img">
                        <img className="user-img" src={message.user_image} alt="vader"/>
                    </div>
                    <div className="message-content">
                        <h3 className="user-name">{message.user_name}</h3>
                        <p className="message-date">{message.date}</p>
                        <p className="user-message">{message.content}</p>

                    </div>
                </div>
                )}
            </div>
            <div className="message-holder">
                <textarea name="message" value={message} onChange={onChange} className="message" cols="30" rows="1" placeholder="Write something..."></textarea>
                <button onClick={onAddMessage}>Submit</button>
            </div>
        </div>
    )
}
export default DomoBuzz;
