import React, { Component } from 'react';
import { } from './styles';
import IconLoading from '~/assets/icons/animation_500_kd7l4foy.gif';
import { connect } from 'react-redux';

class LoadingScreenComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const { isLoading = false } = this.props;
        return (
            <div>
                {isLoading && (
                    <div style={{ zIndex: 1, position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', display: 'flex' }}>
                        <img style={{ height: '100px' }} src={IconLoading} />
                    </div>
                )}
                {this.props.children}
            </div>
        )
    }
}

LoadingScreenComponent.propTypes = {}

const mapStateToProps = (state) => {
    return {
        isLoading: state.commonReducer.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

LoadingScreenComponent.propTypes = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingScreenComponent)
