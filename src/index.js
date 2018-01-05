import React from 'react';
import { render } from 'react-dom';
import 'airbnb-browser-shims';
import './semantic/dist/semantic.min.css';
import Layout from './components/layout';

const App = () => <Layout />;

render(<App />, document.getElementById('app'));
