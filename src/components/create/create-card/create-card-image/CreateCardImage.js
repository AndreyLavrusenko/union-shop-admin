import React from 'react';
import './create-card-image.scss';


const CreateCardImage = () => {
    return (
        <div className="card__product-img">
            <label className="input-file">
                <input type="file" name="productFile"/>
                <span>
                    <div/>
                </span>
            </label>

            <div className="card__product-multiple">
                <label className="input-file-small">
                    <input multiple={true} type="file" name="productFiles"/>
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
            </div>
        </div>
    );
};

export default CreateCardImage;