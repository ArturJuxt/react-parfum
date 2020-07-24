import React from 'react';
import './Content.scss';
import one from '../../../img/duxi/1.jpg';
import two from '../../../img/duxi/2.jpg';
import tree from '../../../img/duxi/3.jpg';
import forh from '../../../img/duxi/4.jpg';
import five from '../../../img/duxi/5.jpg';
import six from '../../../img/duxi/6.jpg';
import sevn from '../../../img/duxi/7.jpg';
import eyt from '../../../img/duxi/8.jpg';
import nine from '../../../img/duxi/9.jpg';
import ten from '../../../img/duxi/10.jpg';
import ilevn from '../../../img/duxi/11.jpg';
import tulevn from '../../../img/duxi/12.jpg';

function Content() {
    return (
        <div className="content">
            <div>
                <img src={one} alt="img" />
                <img src={two} alt="img" />
                <img src={nine} alt="img" />
                <img src={tree} alt="img" />
                <img src={forh} alt="img" />
                <img src={ten} alt="img" />
                <img src={five} alt="img" />
                <img src={tulevn} alt="img" />
                <img src={six} alt="img" />
                <img src={sevn} alt="img" />
                <img src={ilevn} alt="img" />
                <img src={eyt} alt="img" />
                
            </div>
        </div>
    )
}

export default Content
