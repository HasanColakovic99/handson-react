import styled from "styled-components";
import {colors, breakpoints} from "../../lib/style/theme";

export const Landing = styled.div`
    position: relative;
    height: 100vh;
    z-index: 0;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const OverlayPrimary = styled.div`
    position: absolute;
    left: 0;
    width: 27%;
    height: 100%;
    background-color: ${colors.overlayPrimary};
`;

export const OverlaySecondary = styled.div`
    position: absolute;
    right: 0;
    width: 73%;
    height: 100%;
    background-color: ${colors.overlaySecondary};
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: calc((100% - 1260px) / 2);
    width: 1260px;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
`;

export const ContentInner = styled.div`
    margin: 0 auto;

    @media (max-width: 375px) {
        width: 330px;
    }

    @media (${breakpoints.tabletSmall}) {
        width: 450px;
    }

    @media (${breakpoints.tablet}) {
        width: 550px;
    }

    @media (${breakpoints.desktop}) {
        width: 960px;
    }

    @media (${breakpoints.desktopLarge}) {
        width: 1280px;
    }
`;

export const Title = styled.h1`
    font-size: 56px;
    width: 550px;
    color: ${colors.bgPrimary};
    margin-bottom: 24px;

    @media (max-width: 375px) {
        width: 300px;
        font-size: 40px;
    }

    @media (${breakpoints.mobileLarge}) {
        width: 350px;
        font-size: 45px;
    }

    @media (${breakpoints.tabletSmall}) {
        width: 450px;
        font-size: 56px;
    }
`;

export const Subtitle = styled.p`
    font-size: 16px;
    line-height: 180%;
    color: ${colors.bgPrimary};
    width: 440px;
    margin-bottom: 48px;

    @media (max-width: 375px) {
        width: 330px;
    }

    @media (${breakpoints.mobileLarge}) {
        width: 350px;
    }

    @media (${breakpoints.tabletSmall}) {
        font-size: 16px;
    }
`;