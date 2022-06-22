import React from 'react';
import './Header.scss';
import LogoImg from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import { Link, NavLink } from "react-router-dom";

const Header = ({
    isSecondary = false
}) => {

    // AKO JE isSecondary == TRUE, onda će naslov biti tipa secondary, inače ostaje isti kao na home page-u
    let headerClass = 'Header';
    if (isSecondary) {
        headerClass += " " + "Header-Secondary";
    }

    return (
        <div className={headerClass}>
            <div className="Header-Iner">
                <Link className="Header-LogoLink" to="/">
                    <img className="Header-Logo" src={LogoImg} alt="Logo" />
                </Link>
                <nav className="Header-Nav">
                    <NavLink
                        to="/courses"
                        className={({ isActive }) => (isActive ? "Header-NavLinkActive" : "Header-NavLink")}
                    >
                        Courses
                    </NavLink>
                    <div className="Header-NavButton">
                        <Button modifiers={['nav']}>Sign In</Button>
                    </div>

                    <div className="Header-NavButton">
                        <Button modifiers={['nav', 'secondary']}>Register</Button>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;