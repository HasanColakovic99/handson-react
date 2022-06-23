import styled from "styled-components";
import {colors, breakpoints} from "../../lib/style/theme";

export const SearchBar = styled.input`
    padding: 0px 15px;
    margin-bottom: 40px;

    @media (${breakpoints.tabletSmall}) {
        max-width: 400px;
        padding: 0;
        margin: 0 auto;
    }

    @media (${breakpoints.tablet}) {
        border: 1px solid ${colors.textSecondary};
        border-radius: 6px;
        line-height: 40px;
        outline: none;
        font-size: 14px;

        &:focus {
            border: 1px solid ${colors.textPrimary};
        }
    }

    @media (${breakpoints.desktop}) {
        font-size: 16px;
        margin-bottom: 40px;
    }
`;