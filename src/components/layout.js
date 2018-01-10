import React from 'react';
import { Provider } from 'react-redux';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
} from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import '../semantic/dist/components/site.css';
import '../semantic/dist/components/container.css';
import '../semantic/dist/components/menu.css';
import MainMenu from './MainMenu';
import Home from '../containers/Home';

const layout = props =>
  // const history = syncHistoryWithStore(browserHistory, props.store);
  (
    <Provider store={ props.store }>
      <Router>
        <div>
          <section className="header">
            <Container>
              <Menu inverted borderless stackable size="large">
                <MainMenu />
              </Menu>
            </Container>
          </section>

          <Route exact path="/" component={ Home } />
        </div>
      </Router>
    </Provider>);
export default layout;
