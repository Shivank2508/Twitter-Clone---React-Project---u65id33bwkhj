import React, { useEffect, useState } from "react";
import {
    FaRegImage,
    FaRegListAlt,
    FaRegSmile,
    FaCalendarCheck,
} from "react-icons/fa";
const CreateTweet = () => {
    const [createTweetState, setCreateTweetState] = useState('')


    function handleInput(e) {
        setCreateTweetState(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();

        let temp = JSON.parse(localStorage.getItem('tweets')) || [];
        localStorage.setItem("tweets", JSON.stringify([...temp, createTweetState]))
        window.location.reload();
    }
    useEffect(() => {
        console.log(createTweetState);
    })
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__img">
                    <img src="/1580223242934 (1).jpeg" alt="profile img" />
                </div>
                <div className="create__input">
                    <input
                        type="text"
                        className="create__control"
                        placeholder="What's happing?"
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className="create__second">
                <div className="create__icons">
                    <FaRegImage className="ic" />
                    <FaRegListAlt className="ic" />
                    <FaRegSmile className="ic" />
                    <FaCalendarCheck className="ic" />
                </div>
                <div className="create__btn" onClick={handleSubmit}>
                    <a href="">Tweet</a>
                </div>
            </div>
        </div>
    );
};

export default CreateTweet;