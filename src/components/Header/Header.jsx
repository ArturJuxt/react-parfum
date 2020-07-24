import React from 'react';
import './Header.scss';
import delivery from '../../img/delivery_bmw.png';
import present from '../../img/present.svg';

const Header = () => {
  return (
    <div className="wrapper">
      <div className="logo_parfum">
        <div className="button">
          <button className="logo">Perfume__Gallery</button>
        </div>
        <div className="logo_name">
          <h2>Parfume gallery</h2>
          <p>Красота, косметика и уход за собой</p>
        </div>
      </div>

      <div className="delivery">
        <div>
          <img src={delivery} alt="logo_delivery" />
        </div>
        <div className="delivery_info">
          <h2>Бесплатная доставка</h2>
          <p>Бесплатная доставка в Ереване, во всех регионах</p>
        </div>
      </div>

      <div className="present">
        <div className="present_img">
          <img src={present} alt="present logo" />
        </div>
        <div className="present_info">
          <h2>Акции и подарки</h2>
          <p>большинство видов и запахов</p>
        </div>
      </div>

      <div className="number">
        <h2>+ 374 55 922 355</h2>
      </div>
      
    </div>
  )
}

export default Header;
