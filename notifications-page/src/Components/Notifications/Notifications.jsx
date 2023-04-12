import React from "react";
import "./Notifications.css";

function NotificationsA(props) {

    const message = props.message;
    const secondImage = props.secondImage;
    function ShowMessage() {
        if(message !== undefined) {
            return (
                <div className="text message">{props.message}</div>
            );
        }
    }


    function ShowSecondImage() {
        if(secondImage !== undefined) {
            return(
                <div>
                    <img src={props.secondImage} alt="Image2" className="image"/>
                </div>
            );
        }
    }

    return(
        <div className="hero" style={{"backgroundColor" : props.isRead === "false" ? "rgb(135, 206, 235, .2)" : "none"}}>
            <div className="noti-wrapper">
                <div className="image-div">
                    <img src={props.profilePic} alt="Profile" className="image"/>   
                </div>
                <div className="text">
                    <p>
                        <span className="name">{props.name}</span> {props.noti_text} <span className="post">{props.post}</span> <span className="group">{props.group}</span> <span className="dot"></span>
                    </p>
                    <p className="time">{props.time} ago</p>
                    <ShowMessage />
                </div>
                <ShowSecondImage />
            </div>
        </div>
    );
}

export default NotificationsA;