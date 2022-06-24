import styled, { css } from "styled-components";
import {colors, breakpoints} from "../../lib/style/theme";

export const Section = styled.section`
    padding: 60px 24px;

    @media (${breakpoints.desktop}) {
        padding: 120px 0;
    }

    ${props => props.isTestimonial && `
        background-color: ${colors.bgSecondary};
    `}
`;

export const SectionInner = styled.div`
    @media (${breakpoints.desktop}) {
        width: 960px;
        margin: 0 auto;
    }

    @media (${breakpoints.desktopLarge}){
        width: 1260px;
    }
`;

export const ActionText = styled.span`
    display: block;
    color: ${colors.primary};
    font-weight: 500;
    margin-bottom: 24px;
`;

export const Heading = styled.div`
    margin-bottom: 64px;

    @media (${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Title = css`
    color: ${colors.textPrimary};
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 32px;

    @media (${breakpoints.tablet}) {
        font-size: 32px;
        margin-bottom: 0;
    }

    @media (${breakpoints.desktop}) {
        font-size: 36px;
    }
`;

export const Titleh1 = styled.h1`
    ${Title};

    ${props => props.isCentered && `
        width: 100%;
        text-align: center;
    `}
`;

export const Titleh2 = styled.h2`
    ${Title};

    ${props => props.isCentered && `
        width: 100%;
        text-align: center;
    `}
`;

