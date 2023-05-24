import React from "react";


const Likes = ({ numberOfLikes, threadId }) => {
    const handleLikeFunction = () => {

        console.log("Liké!!");

    };s
    return (

        <div className='likes__container'>

            <svg

                xmlns='https://social-network-api.osc-fr1.scalingo.io/theBlhook/post/like'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4 likesBtn'
                onClick={btnLike}
            >


            </svg>

            <p style={{ color: "#434242" }}>

                {numberOfLikes === 0 ? "" : numberOfLikes}

            </p>

        </div>

    );

};


export default Likes;