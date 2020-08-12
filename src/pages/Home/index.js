import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeskImage from '../../assets/images/desk.jpg';
import { Row, Col, Avatar, Typography, Input } from 'antd';
import * as EU from 'evergreen-ui';
import * as authActions from '~/actions/auth/authActions';
import { connect } from 'react-redux';
import '../../styles/tailwindStyles.css';

const { Text } = Typography

class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleSignIn = () => {
        this.props.onSignIn('123', '123');
    }

    render() {
        return (
                <Row>
                    <Col span={7}>
                        <div style={{ position: 'relative' }}>
                            <div
                                style={{
                                    height: '100vh',
                                    position: 'relative',
                                    backgroundImage: `url(${DeskImage})`,
                                    backgroundSize: 'cover',
                                    alignItems: 'center',
                                    display: 'flex',
                                    opacity: 0.6,
                                }}
                            ></div>
                        </div>
                    </Col>
                    <Col span={17}>
                        <Row
                            style={{
                                paddingLeft: 20,
                                display: 'flex',
                                justifyItems: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar
                                size={150}
                                src="https://png.pngtree.com/element_our/png_detail/20180926/boat-ship-sea-sailing-vector-logo-png_113934.jpg"
                            />
                            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
                                Start
                        </Text>
                            <Text style={{ fontSize: 25 }}>Global</Text>
                        </Row>
                        <Row
                            style={{
                                paddingLeft: 100,
                                marginTop: 120,
                                flexDirection: 'column',
                                height: '66vh',
                            }}
                        >
                            <Col>
                                <Row>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: 40,
                                            color: '#4a4f65',
                                        }}
                                    >
                                        Start your business now.
                                </Text>
                                </Row>
                                <Row style={{ marginTop: 10 }}>
                                    <Text
                                        style={{ fontSize: 18, color: '#909498' }}
                                    >
                                        Creating your company in US is just a few
                                        steps away,
                                </Text>
                                </Row>
                                <Row>
                                    <Text
                                        style={{ fontSize: 18, color: '#909498' }}
                                    >
                                        Enter your email address to continue.
                                </Text>
                                </Row>
                                <Row
                                    style={{
                                        marginTop: 90,
                                        flexDirection: 'column',
                                    }}
                                >
                                    <Row>
                                        <Text style={{ fontSize: 15 }}>
                                            Email address
                                    </Text>
                                    </Row>
                                    <Row
                                        style={{
                                            marginTop: 5,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                        }}
                                    >
                                        <Row>
                                            <Input
                                                style={{
                                                    borderRadius: 3,
                                                    width: 400,
                                                }}
                                                size="large"
                                                placeholder="address@ssd.com"
                                            />
                                        </Row>
                                        <EU.Button
                                            onClick={this.handleSignIn}
                                            style={{
                                                height: 42,
                                                width: 140,
                                                background: '#0062ff',
                                                borderWidth: 0,
                                                borderColor: '#FFF',
                                                marginLeft: 20,
                                            }}
                                            appearance="minimal"
                                            iconAfter="arrow-right"
                                        >
                                            <Text
                                                style={{
                                                    color: '#FFF',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                GET STARTED
                                        </Text>
                                        </EU.Button>
                                    </Row>
                                </Row>
                            </Col>
                            <Row style={{ marginTop: 50 }}>
                                <Text style={{ fontSize: 15, color: '#909498' }}>
                                    I really have a account, let's
                                <Text
                                        style={{
                                            fontSize: 15,
                                            color: '#0062ff',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {' '}
                                    SignIn
                                </Text>
                                </Text>
                            </Row>
                        </Row>
                    </Col>
                </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (email, password) => {
            dispatch(authActions.signIn({ email, password }))
        },
    }
}

HomeComponent.propTypes = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)
