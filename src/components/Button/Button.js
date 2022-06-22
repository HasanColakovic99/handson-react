import "./Button.scss";
import { useNavigate } from "react-router-dom";

const Button = ({
    click,
    modifiers,
    children,
}) => {
    const modifierClasses = {
        secondary: 'Button_secondary',
        nav: 'Button_nav',
        landing: 'Button_landing',
        heading: 'Button_heading',
        outline: 'Button_outline'
    }

    let buttonClass = "Button";

    modifiers.map(modifier => buttonClass += " " + modifierClasses[modifier]);

    return (
        <button onClick={click} className={buttonClass}>{children}</button>
    );
}

export default Button;