import styled from 'styled-components';
import Background from '~/assets/images/bg.jpg';

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

    header {
        display: flex;
        flex-direction: column;
        padding: 0% 20% 0% 20%;

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

    div:first-of-type {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        
        div:first-of-type {
            justify-content: center;
            align-items: center;
            justify-items: center;

            span {
                font-size: 13px;
                font-weight: bold;
                margin-left: 5px;
                color: #2B3C57;
            }
        }

        div:nth-of-type(2) {
            justify-content: center;
            align-items: center;
            justify-items: center;

            span {
                font-size: 13px;
                font-weight: bold;
                margin-left: 5px;
                color: #1777FB;
            }
        }
    }
/* 
    div:nth-of-type(2) {
        margin-top: 30px;

        span:last-of-type {
            color: #1777FB;
            font-weight: bold;
            margin-left: 3px;
            cursor: pointer;
        }
    } */
`
