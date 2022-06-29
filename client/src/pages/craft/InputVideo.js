import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function InputVideo(){

    const inputRef = React.useRef();

    const [source, setSource] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };

    return(
        <div className="VideoInput">
            <label htmlFor="input-image" className="video-label">
                <AddIcon className="add-icon"/>
            </label>
            <input 
                ref={inputRef}
                className="VideoInput_input"
                id="input-image"
                type="file"
                onChange={handleFileChange}
                hidden
                accept= ".mov, .mp4"
            />
            {source && (
                <video 
                    className="VideoInput_video"
                    autoPlay
                    loop
                    muted
                    src={source}
                />
            )}
        </div>
    );
}
