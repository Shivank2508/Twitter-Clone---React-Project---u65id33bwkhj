import React, { useEffect, useState } from "react";
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
} from "react-icons/fa";
const Posts = () => {

    const [poststate, setPoststate] = useState([])
    const [like, setLike] = useState(45);
    const [comentbool, setCommentbool] = useState(false)
    const [comment, setComment] = useState('')
    const [comment1, setComment1] = useState([])

    function handleLike() {

        setLike(like + 1);
    }
    function handlecomment() {
        setCommentbool(true);
    }
    function handlecommentchild(e) {
        e.preventDefault();
        setComment1([...comment1, comment])
    }

    useEffect(() => {
        const tweetData = JSON.parse(localStorage.getItem('tweets')) || [];
        setPoststate(tweetData)
    }, [])


    return (
        <div>
            {
                poststate && poststate.map((item, index) => (

                    <div className="postss">
                        <div className="postss__first">
                            <div className="posts__first__img">
                                <img src="/1580223242934 (1).jpeg" alt="profile img" />
                            </div>
                            <div className="posts__first__name">
                                <strong>Shivank Tyagi </strong> <FaRegCheckCircle className="verify" />
                            </div>
                            <div className="posts__first__username">
                                @shivank <span>6m</span>
                            </div>
                        </div>
                        <div className="postss__details">
                            <div className="postss__details__msg">
                                {item}
                            </div>
                            <div className="postss__details__img">

                            </div>
                            <div className="reactions">
                                <span onClick={handlecomment}>
                                    <FaComment className="re" /> 45
                                </span>
                                <span>
                                    <FaRegChartBar className="re" /> 4
                                </span>
                                <span onClick={handleLike}>
                                    <FaHeart className="re" /> {like}
                                </span>
                                <span>
                                    <FaLeaf className="re" /> 234
                                </span>

                            </div>
                            <>
                                {
                                    comentbool &&
                                    <>
                                        <div>
                                            <ul>{comment1}</ul>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '50px' }}>
                                            <input style={{ width: '90%' }} onChange={(e) => setComment(e.target.value)} />


                                            <div className="create__btn" style={{ marginBottom: '10px', width: '20%' }} onClick={handlecommentchild}>
                                                <a href="">Tweet</a>

                                            </div>
                                        </div>
                                    </>
                                }
                            </>
                        </div>
                    </div>
                ))

            }
        </div>

    );
};

export default Posts;