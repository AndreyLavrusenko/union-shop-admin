import {NavLink} from "react-router-dom";

import './header.scss'
import logo from '../../assets/img/logo/logo.svg'

const Header = () => {
    return (
        <div className="header">
            <NavLink to={"/"}>
                <img src={logo} alt="Union logo"/>
            </NavLink>
        </div>
    )
}

export default Header;