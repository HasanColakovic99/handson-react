import {NavBar as NavBarWrapper, MenuNavLink} from "./NavBarStyle";

const NavBar = () => {
    return (
        <NavBarWrapper>
            <MenuNavLink to="/courses">Courses</MenuNavLink>
            <MenuNavLink to="/sign-in">Sign in</MenuNavLink>
            <MenuNavLink to="/register">Register</MenuNavLink>
            <MenuNavLink to="/profile">Profile</MenuNavLink>
        </NavBarWrapper>
    );
}

export default NavBar;