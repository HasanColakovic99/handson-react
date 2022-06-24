import {Button as ButtonWrapper} from "./ButtonStyle";

const Button = ({
    click,
    isSecondary,
    isNav,
    isLanding,
    isHeading,
    isOutline,
    isForm,
    children,
}) => {
    return (
        <ButtonWrapper onClick={click} isForm={isForm} isSecondary={isSecondary} isNav={isNav} isLanding={isLanding} isHeading={isHeading} isOutline={isOutline}>{children}</ButtonWrapper>
    );
}

export default Button;