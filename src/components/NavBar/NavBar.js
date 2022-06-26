import {NavBar as NavBarWrapper, MenuNavLink} from "./NavBarStyle";

const NavBar = () => {
    return (
        <NavBarWrapper>
            <MenuNavLink to="/courses">Courses</MenuNavLink>
            <MenuNavLink to="/">Sign in</MenuNavLink>
            <MenuNavLink to="/">Register</MenuNavLink>
        </NavBarWrapper>
    );
}

export default NavBar;