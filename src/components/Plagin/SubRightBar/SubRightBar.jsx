import React from 'react';
import './SubRightBar.scss';
import paco from '../../../img/paco.jpg';
import armani from '../../../img/armani.jpg';

function SubRightBar() {
    return (
        <div className="sub_right_bar">
            <img src={paco} alt="img" />
            <img src={armani} alt="img" />
        </div>
    )
}

export default SubRightBar
