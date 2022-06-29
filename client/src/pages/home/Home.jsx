import React from 'react';

import Img from "../../assets/down.png";
import './home.scss';


function Home(){
    return(
        <div className="home">
            <div className="images">
                <img
                    src="https://images.pexels.com/photos/695779/pexels-photo-695779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="background-img"
                />
            </div>
            <div className="home-text">
                <div className="hm-txt-ps">
                    <div className="line-1">
                        <span id="txt-1">A</span>
                    </div>
                    <div className="line-2">
                        <h1>
                            <span id="txt-day" style={{ color: "#1f2a65" }}> DAY </span> <span id="txt-symbol"> - </span> <span id="txt-in" style={{ color: "#ffff00" }}> IN </span> <span id="txt-symbol"> - </span> <span id="txt-the" style={{ color: "#a0a0a0" }}> THE </span> <span id="txt-symbol"> - </span> <span id="txt-life" style={{ color: "#ba160c" }}>LIFE</span>
                        </h1>
                    </div>
                    <div className="line-3">
                        <span id="txt-3">OF A</span>
                    </div>
                    <div className="line-4">
                        <h1>
                            <span id="txt-4">SURFER</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="btn-down">
                <a href="#about">
                    <img
                        src={Img}
                        alt="down-img"
                    />
                </a>
            </div>
        </div>
    );
}

export default Home;