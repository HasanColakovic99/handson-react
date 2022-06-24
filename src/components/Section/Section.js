import React from 'react';
import Button from '../Button/Button';
import {Section as SectionWrapper, SectionInner, ActionText, Heading, Title} from "./SectionStyle";

const Section = ({
    actionText,
    title,
    buttonText,
    isHeadingVisible = true,
    isTestimonial = false,
    children
}) => {
    return (
        <SectionWrapper isTestimonial={isTestimonial}>
            <SectionInner>
                {actionText && <ActionText>{actionText}</ActionText>}
                {isHeadingVisible && 
                <Heading>
                    {title && <Title>{title}</Title>}
                    {buttonText && <Button isHeading={true} isOutline={true}>{buttonText}</Button>}    
                </Heading>}
                {children}
            </SectionInner>
        </SectionWrapper>
    );
}

export default Section;