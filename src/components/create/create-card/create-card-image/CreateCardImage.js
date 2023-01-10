import React from 'react';
import './create-card-image.scss';


const CreateCardImage = ({loadImage, preview, loadArrImage, uploadedFiles}) => {
    return (
        <div className="card__product-img">
            <label className="input-file">
                <input onChange={loadImage} type="file" name="productFile"/>
                {preview ? (
                    <span className="card__product-preview">
                        <img src={preview} alt=""/>
                    </span>
                ) : (
                    <span>
                        <div/>
                    </span>
                )}

            </label>

            <div className="card__product-multiple">
                <label className="input-file-small">
                    <input onChange={loadArrImage} multiple type="file" name="productFiles"/>
                    <span>
                        <div/>
                    </span>
                    <span>
                        <div/>
                    </span>
                    <span>
                        <div/>
                    </span>
                    <span>
                        <div/>
                    </span>
                    <span>
                        <div/>
                    </span>
                    <span>
                        <div/>
                    </span>
                </label>
                <div className="card__product-small">
                    {uploadedFiles.map((img, i) => {
                        return <img className="card__product-smallpreview" key={i} src={URL.createObjectURL(img)} alt=""/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default CreateCardImage;