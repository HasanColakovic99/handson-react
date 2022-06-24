import styled from "styled-components";
import {NavLink, Link} from "react-router-dom";
import {colors, breakpoints} from "../../lib/style/theme";
import {ReactComponent as HamburgerIcon} from "../../assets/images/icon-hamburger.svg";

export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    padding: 32px 0px;

    ${props => props.isSecondary && `
        background-color: ${colors.textPrimary};
        position: initial;
    `}

    @media (${breakpoints.desktop}){
        padding: 32px 0;
    }
`;

export const HeaderInner = styled.div`
    width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (${breakpoints.desktop}) {
        width: 960px;
        margin: 0 auto;
        padding: 32px 0;
    }

    @media (${breakpoints.desktopLarge}) {
        width: 1260px;
    }
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
    width: 140px;
`;

export const Hamburger = styled(HamburgerIcon)`
    width: 30px;
    height: auto;
    z-index: 2;

    path {
        fill: ${colors.bgPrimary};
    }

    @media (${breakpoints.desktop}) {
        display: none;
    }
`;

export const Nav = styled.nav`
    display: none;

    @media (${breakpoints.desktop}) {
        display: block;
    }
`;

export const HeaderNavLink = styled(NavLink)`
    color: ${colors.bgPrimary};
    letter-spacing: 1px;
    margin-right: 48px;

    &:hover {
        border-bottom: 1px solid ${colors.bgPrimary};
    }

    ${props => props.isActive && `
        border-bottom: 1px solid ${colors.bgPrimary};
    `}
`;

export const ButtonLink = styled(Link)`
    margin-right: 24px;
    display: inline-block;

    &:last-child {
        margin-right: 0;
    }
`;

