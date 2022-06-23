import {Button as ButtonWrapper} from "./ButtonStyle";

const Button = ({
    click,
    isSecondary,
    isNav,
    isLanding,
    isHeading,
    isOutline,
    children,
}) => {
    return (
        <ButtonWrapper onClick={click} isSecondary={isSecondary} isNav={isNav} isLanding={isLanding} isHeading={isHeading} isOutline={isOutline}>{children}</ButtonWrapper>
    );
}

export default Button;