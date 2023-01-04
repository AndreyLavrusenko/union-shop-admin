import React from 'react';
import '../create-title.scss'

import done from '../../../../assets/img/icon/done.svg'

const CreateTitleComplete = ({title}) => {
    return (
        <div className="create-title-complete">
            <h2>{title}</h2>
            <img src={done} alt="done"/>
        </div>
    );
};

export default CreateTitleComplete;