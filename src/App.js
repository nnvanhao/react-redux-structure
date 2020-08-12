import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './configs/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';
import LoadingScreen from '~/components/LoadingScreen';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <LoadingScreen>
                    <Router history={history}>
                        <Routes />
                        <GlobalStyle />
                        <ToastContainer autoClose={3000} />
                    </Router>
                </LoadingScreen>
            </PersistGate>
        </Provider>
    );
}

export default App;
