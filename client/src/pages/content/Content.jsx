import React from 'react';
import './content.scss';
import FrstVd from '../../assets/videos/daniel-torobekov-beach-break-waves.mp4';
import ScndVd from '../../assets/videos/taryn-elliott-fish-hoek-video.mp4';
import ThrdVd from '../../assets/videos/taryn-elliott-muizenberg-video.mp4';
import BchBrk from '../../assets/jeremy-bishop-FsFGF-ATwKw-unsplash.jpg';

const ImageBg = 'https://images.pexels.com/photos/9503433/pexels-photo-9503433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const BchBrkImgOne = 'https://images.unsplash.com/photo-1526485641275-3b11a42acd44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const BchBrkImgTwo = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const BchBrkImgThree = 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const BoxTwoImg = 'https://images.unsplash.com/photo-1535800149805-4f38bbc13707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

const BoxThreeImgOne = 'https://images.unsplash.com/photo-1537519646099-335112f03225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const BoxThreeImgTwo = 'https://images.pexels.com/photos/8159775/pexels-photo-8159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

function Content(){
    return(
        <div className="content">
            <div className="cnt-ttl">
                <h1>
                    SURFS-LIFE
                </h1>
            </div>
            <div className="cnt-bckgrnd-img">
                <div className="cntnt-vrly"></div>
                <div className="cnt-img-dv">
                    <div className="img-dv">
                        <img 
                            src={ImageBg}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="ps-dv-cnt">
                <div className="rlvnt-cnt-dv">
                    <div className="bx-1">
                        <div className="tp-btm-img">
                            <div className="tp-img">
                                <img 
                                    src={BchBrkImgOne}
                                    alt=""
                                />
                            </div>
                            <div className="dwn-img">
                                <img 
                                    src={BchBrkImgTwo}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="lft-img">
                            <div className="lft-img-dv">
                                <img 
                                    src={BchBrkImgThree}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="cntr-dv">
                            <div className="cntr-vd-dv">
                                <div className="vd-dv">
                                    <video loop autoPlay muted>
                                        <source
                                            src={FrstVd}
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="bch-brk-ps">
                            <img 
                                src={BchBrk}
                                alt=""
                            />

                            <a href="https://www.pacificsurf.com/7-types-of-waves-every-surfer-should-know-about/">
                                <h1>
                                    Beach-Breaks Waves!!!
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div className="bx-2">
                        <img 
                            src={BoxTwoImg}
                            alt=""
                        />
                    </div>
                    <div className="bx-3">
                        <div className="bx-3-grd">
                            <div className="bx-3-one">
                                <img 
                                    src={BoxThreeImgOne}
                                    alt=""
                                />
                            </div>
                            <div className="bx-3-two">
                                <img 
                                    src={BoxThreeImgTwo}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bx-4">
                        <div className="bx-4-one">
                            <video autoPlay loop muted>
                                <source 
                                    src={ThrdVd}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div className="bx-4-two">
                            <video autoPlay loop muted>
                                <source
                                    src={ScndVd}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;