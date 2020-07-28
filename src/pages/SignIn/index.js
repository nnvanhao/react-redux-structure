import React, { Component } from 'react';
import { SignInFormContainer, SignInForm } from './styles';
import { Row, Col, Input, Switch, Button } from 'antd';
import { MailOutlined, LockOutlined, KeyOutlined, UnlockOutlined } from '@ant-design/icons';

class SignInComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
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
                        <SignInForm style={{ paddingLeft: '20%', paddingRight: '20%' }}>
                            <Input style={{ marginTop: 10, height: 50, borderRadius: 6 }} size="large" placeholder="Email address" prefix={<MailOutlined />} />
                            <Input style={{ marginTop: 20, height: 50, borderRadius: 6 }} size="large" placeholder="Password" prefix={<LockOutlined />} />

                            <div>
                                <div>
                                    <Switch size="small" defaultChecked />
                                    <span>Remember Me</span>
                                </div>
                                <div>
                                    <KeyOutlined style={{ fontSize: 20 }} />
                                    <span>Forget Password</span>
                                </div>
                            </div>

                            <Button
                                type="primary"
                                style={{ width: '100%', height: 50, borderRadius: 6, marginTop: 60, backgroundColor: '#0C6FFF', fontWeight: 'bold', fontSize: 18 }}
                                icon={<UnlockOutlined />}
                                loading={false}
                            >
                                LOGIN
                            </Button>

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
            // <Container>
            //     <FormCard>

            //     </FormCard>
            // </Container>
        )
    }
}

SignInComponent.propTypes = {}

export default SignInComponent;
