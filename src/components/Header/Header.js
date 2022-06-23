import LogoImg from '../../assets/images/logo.svg';
import Button from '../Button/Button';
import {Header as HeaderWrapper, HeaderInner, LogoLink, LogoImg as LogoElement, Hamburger, Nav, HeaderNavLink, ButtonLink} from "./HeaderStyle";

const Header = ({
    isSecondary
}) => {

    return (
        <HeaderWrapper isSecondary={isSecondary}>
            <HeaderInner>
                <LogoLink to="/">
                    <LogoElement src={LogoImg} alt="Logo"/>
                </LogoLink>
                <Hamburger />
                <Nav>
                    <HeaderNavLink to="/courses">Courses</HeaderNavLink>
                    <ButtonLink to="/">
                        <Button modifiers={['nav']}>Sign In</Button>
                    </ButtonLink>
                    <ButtonLink to="/">
                        <Button modifiers={['nav', 'secondary']}>Register</Button>
                    </ButtonLink>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>
    );
}

export default Header;