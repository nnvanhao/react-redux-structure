import React, { Component } from 'react';
import { SignInFormContainer, SignInForm, Input, Button, RedirectCreateAccount, SignInOtherMethod } from './styles';
import { Row, Col, Switch } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import routes from '~/services/history';
import { connect } from 'react-redux';
import * as authActions from '~/actions/auth/authActions';

class SignInComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleRedirectToForgotPassword = () => {
        routes.push("/");
    }

    handleSignIn = () => {
        this.props.onSignIn('123', '123');
    }

    render() {
        return (
            <Row>
                <Col xl={10} lg={12} md={16} sm={24} xs={24}>
                    <SignInFormContainer>
                        <header>
                            <span>REACT Structure</span>
                            <span>Welcome Back</span>
                            <span>Log in your account using email & password</span>
                        </header>
                        <SignInForm>
                            <Input size="large" placeholder="Email address" prefix={<MailOutlined />} />
                            <Input size="large" placeholder="Password" prefix={<LockOutlined />} />
                            <div>
                                <div>
                                    <Switch size="small" defaultChecked />
                                    <span>Remember Me</span>
                                </div>
                                <div>
                                    <span onClick={this.handleRedirectToForgotPassword}>Forget Password ?</span>
                                </div>
                            </div>
                            <Button type="primary" onClick={this.handleSignIn}>LOGIN</Button>
                            <RedirectCreateAccount>
                                <span>
                                    Don't have an account yet?
                                </span>
                                <span>
                                    Create an account
                                </span>
                            </RedirectCreateAccount>
                        </SignInForm>
                        <SignInOtherMethod>
                            <span>
                                Login With?
                            </span>
                            <span>
                                Facebook
                            </span>
                            <span>
                                Twitter
                            </span>
                            <span>
                                Google
                            </span>
                        </SignInOtherMethod>
                    </SignInFormContainer>
                </Col>
                <Col xl={14} lg={12} md={8} sm={0} xs={0} style={{ backgroundColor: '#3710CD', height: '100vh' }}>
                    col-6 col-pull-18
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (email, password) => { dispatch(authActions.signIn({ email, password })) },
    }
}

SignInComponent.propTypes = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInComponent)
