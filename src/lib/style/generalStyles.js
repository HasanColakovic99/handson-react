import styled, { css } from 'styled-components';
import {breakpoints, colors, fonts} from "./theme";
import {Form as FormFormik, Field as FieldFormik, ErrorMessage as ErrorMessageFormik} from "formik";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 48px;

    @media (${breakpoints.tabletSmall}) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media (${breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 48px;
    }

    @media (${breakpoints.desktopLarge}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const Main = styled.main`
    width: 100%;
    overflow: hidden;
`;

export const Form = styled(FormFormik)``;


export const Label = styled.label`
    font-family: ${fonts.primary};
`;

export const FormProfile = styled(FormFormik)`
    width: 40%;
`;

export const FormPassword = styled(FormFormik)`
    width: 95%;
    margin-top: 10px;
`;

export const FormRow = styled.div`
    margin-bottom: 32px;
`;

// DEFAULT STYLE KOJEG MOŽEMO DODATI U BILO KOJU STYLE KOMPONENTU
const FieldStyle = css`
    border: 1px solid ${colors.textSecondary};
    border-radius: 6px;
    width: 100%;
    line-height: 50px;
    height: 50px;
    padding: 0 12px;
    outline: none;
    font-size: 14px;
    font-family: ${fonts.primary};

    &:focus {
        border-color: ${colors.textPrimary};
    }

    @media (${breakpoints.desktop}){
        font-size: 16px;
    }
`;

export const Field = styled(FieldFormik)`
    ${FieldStyle}
`;

export const Select = styled.select`
    ${FieldStyle}
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
    font-size: 14px;
    color: ${colors.primary};
    padding-top: 8px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
`;

const Wrapper = css`
    background-color: #f0f1f2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 290px;
    height: 100px;
    margin-left: 40px;
`;

export const ToastWrapper = styled.div`
    ${Wrapper}
`;

export const ResetPasswordWrapper = styled.div`
    ${Wrapper};
    width: 400px;
    height: fit-content;
`;

export const Title = styled.div`
    font-family: ${fonts.secondary};
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Subtitle = styled.div`
    font-family: ${fonts.primary};
    font-size: 13px;
`;
