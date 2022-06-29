import React from 'react';
import { dummydata } from '../../api';

import './about.scss';

function About(){
    return(
        <div className="about" id="about">
            <div className="bckgrnd">
                <div className="vrly"></div>
                <div className="bx">
                    <div className="img-bx">
                        <img 
                            src="https://images.pexels.com/photos/9503433/pexels-photo-9503433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="surf img"
                        />
                    </div>
                </div>
            </div>
            <div className="ppst-dvs">
                <div className="rltv-dv">
                    <div className="lft-dv">
                        <div className="lft-tp-dv">
                            <img 
                                src="https://images.pexels.com/photos/4321085/pexels-photo-4321085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="top-img"
                            />
                        </div>
                        <div className="lft-cntr-dv">
                            <div className="lft-cntr-img-dv">
                                <img 
                                    src="https://images.pexels.com/photos/4319881/pexels-photo-4319881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                />
                                <h1>
                                    summer vibes
                                </h1>
                            </div>
                        </div>
                        <div className="lft-bttm-dv">
                            <img 
                                src="https://images.pexels.com/photos/4321078/pexels-photo-4321078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="bottom-img"
                            />

                            <h1>
                                her !!!
                            </h1>
                        </div>
                    </div>
                    <div className="cntr-dv">
                        <div className="ps-cntr-dv">
                            <div className="bt-ps-cntr-dv">
                                <div className="bt-cntr-dv">
                                    {dummydata.map((data) => (
                                        <>
                                            <p>{data.paragragh}</p>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rght-dv">
                        <div className="rght-tp-dv">
                            <img
                                src="https://images.unsplash.com/photo-1537519646099-335112f03225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="top-img"
                            />
                        </div>
                        <div className="rght-cntr-dv">
                            <div className="rght-cntr-img-dv">
                                <img
                                    src="https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                                <h1>
                                    memories bro!!!
                                </h1>
                            </div>
                        </div>
                        <div className="rght-bttm-dv">
                            <img
                                src="https://images.unsplash.com/photo-1507882901415-432097b64833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="bottom-img"
                            />

                            <h1>
                                beautiful people
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;