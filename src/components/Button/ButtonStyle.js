import styled from "styled-components";
import {colors} from "../../lib/style/theme";

export const Button = styled.button`
    height: 48px;
    font-size: 16px;
    width: 220px;
    background-color: ${colors.bgPrimary};
    color: ${colors.primary};
    border-radius: 30px;
    font-weight: 500;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: none;

    &:active {
        transform: scale(0.95);
    }

    &:hover {
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 3px 3px ${colors.textPrimary});
    }

    ${props => props.isNav && `
        width: 150px;

        &:hover {
            transition: all 0.3s ease-in-out;
            filter: drop-shadow(0 3px 3px ${colors.black});
        }
    `}

    ${props => props.isSecondary && `
        background: ${colors.primary};
        color: ${colors.bgPrimary};
    `}

    ${props => props.isOutline && `
        border: 1px solid ${colors.primary};

        &:hover {
            background: ${colors.primary};
            color: ${colors.secondary};
        }
    `}

    ${props => props.isHeading && `
        width: 200px;
    `}

    ${props => props.isForm && `
        display: block;
        margin: 0 auto;
        width: 220px;
    `}
`;