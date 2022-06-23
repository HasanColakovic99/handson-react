import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";
import {Section as SectionWrapper, Testimonials, SectionInner, ActionText, Heading, Title} from "./SectionStyle";

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
        <SectionWrapper>
            <SectionInner>
                {actionText && <ActionText>{actionText}</ActionText>}
                {isHeadingVisible && 
                <Heading>
                    {title && <Title>{title}</Title>}
                    {buttonText && <Button click={() => navigate(-1)} modifiers={['heading', 'outline']}>{buttonText}</Button>}    
                </Heading>}
                {children}
            </SectionInner>
        </SectionWrapper>
    );
}

export default Section;