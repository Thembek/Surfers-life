import React from 'react';
import { Parallax } from 'react-parallax';
import './aboutparallax.scss';

import Img from '../../assets/pexels-raphael-amaral-2869354.jpg';

function AboutParallax(){
    return(
        <div className="homeparallax">
            <Parallax className="parallaxImage" bgImage={Img} strength={-620}>
                <div className="Text">
                    <h1>
                        KOMBI
                    </h1>
                </div>
            </Parallax>
        </div>
    );
}

export default AboutParallax;