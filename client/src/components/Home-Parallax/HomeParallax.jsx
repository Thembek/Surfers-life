import React from 'react';
import { Parallax } from 'react-parallax';
import './homeparallax.scss';

import Img from "../../assets/pexels-arthouse-studio-4631030.jpg";

function HomeParallax(){
    return(
        <div className="homeparallax">
            <Parallax className="parallaxImage" bgImage={Img} strength={-500}>
                <div className="text">
                    <h1>
                        BAHAMAS
                    </h1>
                </div>
            </Parallax>
        </div>
    );
}

export default HomeParallax;