import React from 'react';
import { render } from 'react-dom';
import 'airbnb-browser-shims';
import 'babel-polyfill';

import configureStore from './redux/configureStore';
import Layout from './components/layout';

const store = configureStore();

const App = () => <Layout store={ store } />;

render(<App />, document.getElementById('app'));
