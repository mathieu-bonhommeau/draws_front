import React from 'react';
import LikeIcon from "../assets/images/like.svg"
import Image from "next/image";

const Like = props => {
    return (
        <button className="arrow-link opacity50">
            <Image src={LikeIcon} width="13" height="13" alt="Liker !"/>
            <span style={{color: "white", fontSize: "1.25rem"}}>0</span>
        </button>
    );
};

Like.propTypes = {

};

export default Like;
