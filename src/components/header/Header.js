import {NavLink} from "react-router-dom";

import './header.scss'
import logo from '../../assets/img/logo/logo.svg'
import logoWhite from '../../assets/img/logo/logo-white.svg';

const Header = () => {
    // Какого цвета будет логотип
    let img;
    if ((window.location.pathname.split('/')[1] === 'system')) {
        img = logoWhite
    } else {
        img = logo
    }

    return (
        <div className="header">
            <NavLink to={"/"}>
                <img src={img} alt="Union logo"/>
            </NavLink>
        </div>
    )
}

export default Header;