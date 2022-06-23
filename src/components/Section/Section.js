import React from 'react';
import Button from '../Button/Button';
import './Section.scss';
import { useNavigate } from "react-router-dom";

const Section = ({
    modifiers,
    actionText,
    title,
    buttonText,
    isHeadingVisible = true,
    children
}) => {
    const modifierClasses = {
        testimonials: 'Section_testimonials'
    }

    let navigate = useNavigate();

    let sectionClass = 'Section';

    if (modifiers) {
        modifiers.map(modifier => {
            sectionClass += ' ' + modifierClasses[modifier];
        });
    }

    return (
        <section className={sectionClass}>
            <div className="Section-Inner">
                {actionText && <span className="Section-ActionText">{actionText}</span>}
                {isHeadingVisible && <div className="Section-Heading">
                    {title && <h2 className="Section-Title">{title}</h2>}
                    {buttonText && <Button click={() => navigate(-1)} modifiers={['heading', 'outline']}>{buttonText}</Button>}
                </div>}
                {children}
            </div>
        </section>
    );
}

export default Section;