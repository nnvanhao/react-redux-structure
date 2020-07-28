import React, { Component } from 'react';
import { SignInFormContainer, SignInForm, Input, Button } from './styles';
import { Row, Col, Switch } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import routes from '~/services/history';
class SignInComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleRedirectToForgotPassword = () => {
      routes.push("/");
    }

    render() {
        return (
            <Row>
                <Col lg={10} md={12} xs={24}>
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
                                    <span onClick={this.handleRedirectToForgotPassword}>Forget Password</span>
                                </div>
                            </div>
                            <Button type="primary">LOGIN</Button>
                            <div>
                                <span>
                                    Don't have an account yet?
                                </span>
                                <span>
                                    Create an account
                                </span>
                            </div>
                        </SignInForm>
                    </SignInFormContainer>
                </Col>
                <Col lg={14} md={12} xs={0} style={{ backgroundColor: '#3710CD' }}>
                    col-6 col-pull-18
                </Col>
            </Row>
        )
    }
}

SignInComponent.propTypes = {}

export default SignInComponent;
