import React from 'react';
import Button from '../Button/Button';
import {Section as SectionWrapper, SectionInner, ActionText, Heading, Titleh1, Titleh2} from "./SectionStyle";

const Section = ({
    actionText,
    title,
    buttonText,
    isHeadingVisible = true,
    isTestimonial = false,
    isMainSection = false,
    isCentered = false,
    children,
    callback
}) => {
    return (
        <SectionWrapper isTestimonial={isTestimonial}>
            <SectionInner>
                {actionText && <ActionText>{actionText}</ActionText>}
                {isHeadingVisible && 
                <Heading>
                    {title && (isMainSection ? <Titleh1 isCentered={isCentered}>{title}</Titleh1> : <Titleh2 isCentered={isCentered}>{title}</Titleh2>)}
                    {buttonText && <Button click={callback} isHeading={true} isOutline={true}>{buttonText}</Button>}    
                </Heading>}
                {children}
            </SectionInner>
        </SectionWrapper>
    );
}

export default Section;