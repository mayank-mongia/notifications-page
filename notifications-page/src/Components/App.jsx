import React from "react";
import Header from "./Header/Header";
import Notifications from "./Notifications/Notifications";
import Image1 from "../Images/avatar-mark-webber.webp";
import Image2 from "../Images/avatar-angela-gray.webp";
import Image3 from "../Images/avatar-jacob-thompson.webp";
import Image4 from "../Images/avatar-rizky-hasanuddin.webp";
import Image5 from "../Images/avatar-kimberly-smith.webp";
import Image6 from "../Images/image-chess.webp"
import Image7 from "../Images/avatar-nathan-peterson.webp";
import Image8 from "../Images/avatar-anna-kim.webp";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Header/>
            <div className="noti-container">
                <Notifications 
                    isRead = "false"
                    profilePic = {Image1}
                    name = "Mark Webber"
                    noti_text = "reacted to your recent post"
                    post = "My first tournament today"
                    time = "1m"
                />
                <Notifications 
                    isRead = "false"
                    profilePic = {Image2}
                    name = "Angela Gray"
                    noti_text = "followed you"
                    time = "5m"
                />
                <Notifications 
                    isRead = "false"
                    profilePic = {Image3}
                    name = "Jacob Thompson"
                    noti_text = "has joined your group"
                    group = "Chess Club"
                    time = "1 day"
                />
                <Notifications 
                    profilePic = {Image4}
                    name = "Rizky Hasanuddin"
                    noti_text = "sent you a private message"
                    time = "5 days"
                    message = "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
                />
                <Notifications 
                    profilePic = {Image5}
                    name = "Kimberly Smith"
                    noti_text = "commented on your picture"
                    time = "1 week"
                    secondImage = {Image6}
                />
                <Notifications 
                    profilePic = {Image7}
                    name = "Nathan Peterson"
                    noti_text = "reacted to your recent post"
                    post = "5 end-game strategies to increase your win rate"
                    time = "2 weeks"
                />
                <Notifications 
                    profilePic = {Image8}
                    name = "Anna Kim"
                    noti_text = "left the group"
                    group = "Chess Club"
                    time = "2 weeks"
                />
            </div>
        </div>
    )
}

export default App;