import { useState } from 'react';
import LogoImg from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import NavBar from "../NavBar/NavBar";
import {Header as HeaderWrapper, HeaderInner, LogoLink, LogoImg as LogoElement, Hamburger, ClosingHamburger, Nav, HeaderNavLink, ButtonLink} from "./HeaderStyle";

const Header = ({
    isSecondary,
    isActive
}) => {

    const [hidden, setHiden] = useState(false);
    const openNav = () => {
        setHiden(!hidden);
    }

    const closeNav = () => {
        setHiden(false);
    }

    return (
        <HeaderWrapper isSecondary={isSecondary}>
            <HeaderInner>
                <LogoLink to="/">
                    <LogoElement src={LogoImg} alt="Logo"/>
                </LogoLink>
                {!hidden ? <Hamburger onClick={() => openNav()}/> : <ClosingHamburger onClick={() => closeNav()}/>}
                {hidden && <NavBar></NavBar>}
                <Nav>
                    <HeaderNavLink to="/courses" isActive={isActive}>Courses</HeaderNavLink>
                    <ButtonLink to="/">
                        <Button isNav={true}>Sign In</Button>
                    </ButtonLink>
                    <ButtonLink to="/">
                        <Button isNav={true} isSecondary={true}>Register</Button>
                    </ButtonLink>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>
    );
}

export default Header;