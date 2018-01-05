import React from 'react';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import MainMenu from './MainMenu';
import Home from './Home';

const layout = () => (
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
);

export default layout;
