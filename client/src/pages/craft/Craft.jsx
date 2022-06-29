import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import './craft.scss';
import VideoInput from './InputVideo';

import BckgrndVd from '../../assets/videos/taryn-elliott-beach-sunset.mp4';

const ImgDivOneBtmImg = "https://images.unsplash.com/photo-1548351791-c05bc7db500a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

function Craft(){
    const [image, setImage] = useState(null);
    const [uploadingImg, setUploadingimg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    function validateImg(e){
        const file = e.target.files[0];
        if (file.size > 5048576) {
            return alert('Maximum file size is 5MB');
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    async function uploadImage(){
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'd9ri4a5y');
        try{
            setUploadingimg(true);
            let res = await fetch('https://api.cloudinary.com/v1_1/learn-code-10/image/upload', {
                method: 'POST',
                body: data
            });
            const urlData = await res.json();
            setUploadingimg(false);
            return urlData.url;
        } catch (error) {
            setUploadingimg(false);
            console.log(error);
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(!image){
            return alert('Please upload your profile picture.')
        }
        const url = await uploadImage(image);
        console.log(url);
    }

    return(
        <div className="craft">
            <div className="video-overlay"></div>
            <div className="video-div">
                <video autoPlay loop muted>
                    <source
                        src={BckgrndVd}
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="images">
                <div className="img-ps">
                    <div className="img-div-one">
                        <div className="img-btm">
                            <img 
                                src={ImgDivOneBtmImg}
                                alt=""
                            />
                            <h1>
                                Muizenberg!!!
                            </h1>
                        </div>
                        <div className="img-tp">
                           <img 
                                src={ imagePreview} 
                                alt=""
                           />
                        </div>

                        <div className="upload">
                            <label htmlFor="image-upload" className="image-upload-label">
                                 <AddIcon className="add-picture-icon"/> 
                            </label>
                            <input 
                                type="file" id="image-upload"
                                hidden accept="image/png, image/jpeg" onChange={validateImg}
                            />
                        </div>
                    </div>
                    <div className="img-div-two">

                    </div>
                    <div className="img-div-three">
                        <div className="img-3-ttl">
                            <h1>Surf's Up Dudes</h1>
                        </div>
                        <div className="img-thr-vid-div">
                            <div className="img-thr-rltv">
                                <VideoInput width={250} height={250} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Craft;