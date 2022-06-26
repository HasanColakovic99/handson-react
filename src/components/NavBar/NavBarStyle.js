import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {colors, fonts, breakpoints} from "../../lib/style/theme";

export const NavBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: ${fonts.primary};
    font-size: 25px;
    background-color: ${colors.overlayPrimary};
    transition: transform 1s ease-out;
    @media (${breakpoints.desktop}) {
        display: none;
    }
`;

export const MenuNavLink = styled(NavLink)`
    color: ${colors.bgPrimary};
    margin-bottom: 20px;
`;