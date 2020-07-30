import styled from 'styled-components';
import { Input as InputAnt, Button as ButtonAnt } from 'antd';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    background-image: url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
    background-size: 100vw 100vh;
    opacity: 0.7;
`

export const FormCard = styled.div`
    width: 60vw;
    height: 70vh;
    background-color: #FFFFFF;
    border-radius: 25px;
`

export const SignInFormContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        flex-direction: column;
        padding: 0% 20% 0% 25%;

        span:first-of-type {
            margin-top: 60px;
            font-size: 21px;
            font-weight: bold;
            color: #1072FB;
        };

        span:nth-of-type(2) {
            font-size: 36px;
            margin-top: 30px;
            font-weight: bold;
            color: #142344;
        };

        span:last-of-type {
            font-size: 15px;
            color: #989DAE;
        }
    }
`

export const SignInForm = styled.div`
    margin-top: 60px;
    padding-left: 25%;
    padding-right: 25%;

    div:first-of-type {
        display: flex;
        justify-content: space-between;

        div:first-of-type {
            align-items: center;
            justify-items: center;

            span {
                font-size: 14px;
                margin-left: 5px;
                font-weight: 500;
                color: #4F5F74;
            }
        }

        div:nth-of-type(2) {
            align-items: center;
            justify-items: center;

            span {
                font-size: 14px;
                margin-left: 5px;
                font-weight: 500;
                color: #4F5F74;
                cursor: pointer;
            }
        }
    }

    /* @media (width: 768px) {
        padding-left: 15%;
        padding-right: 15%;
    } */
`

export const Button = styled(ButtonAnt)` && {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    margin-top: 80px;
    font-weight: bold;
    font-size: 18px;
    background-color: #0C6FFF;
  }
`

export const Input = styled(InputAnt)` && {
    margin-top: 10px;
    height: 50px;
    margin-bottom: 15px;
    border-radius: 5px;
  }
`

export const RedirectCreateAccount = styled.div`
    margin-top: 30px;

    span:first-of-type {
        font-size: 14px;
        font-weight: 400;
        color: #2B3C57;
    }

    span:last-of-type {
        font-size: 14px;
        font-weight: bold;
        margin-left: 5px;
        color: #0C6FFF;
        cursor: pointer;
    }
`
export const SignInOtherMethod = styled.div`
    padding-left: 25%;
    padding-right: 25%;
    margin-top: auto;
    margin-bottom: 20px;

    span {
        margin: 0px 15px 0px 0px;
        font-weight: 500;
        color: #0C6FFF;
        cursor: pointer;
    }

    span:first-of-type {
        font-size: 14px;
        color: #2B3C57;
        font-weight: 400;
        font-weight: normal;
        cursor: default;
    }
`