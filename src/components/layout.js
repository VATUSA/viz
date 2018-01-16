import React from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import '../semantic/dist/components/site.css';
import '../semantic/dist/components/container.css';
import '../semantic/dist/components/menu.css';

import { fetchAuth } from '../redux/actions/auth';
import MainMenu from './MainMenu';
import Home from '../containers/Home';
import Status from '../containers/Status';

class Layout extends React.Component {
  componentDidMount() {
    this.props.fetchAuth();
  }

  render() {
    if (this.props.auth.hasChecked === true) {
      return (
        <Provider store={ this.props.store }>
          <Router>
            <div>
              <section className="header">
                <Container>
                  <Menu inverted borderless stackable size="large">
                    <MainMenu auth={ this.props.auth } />
                  </Menu>
                </Container>
              </section>

              <Route exact path="/" component={ Home } />
              <Route exact path="/status" component={ Status } />
            </div>
          </Router>
        </Provider>
      );
    }
    return (<div />);
  }
}

Layout.propTypes = {
  fetchAuth: PropTypes.func,
  store: PropTypes.object,
  auth: PropTypes.shape({
    isFetching: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    hasChecked: PropTypes.bool,
    data: PropTypes.shape({
      cid: PropTypes.number,
      fname: PropTypes.string,
      lname: PropTypes.string,
      email: PropTypes.string,
      facility: PropTypes.string,
      rating: PropTypes.number,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      flag_needbasic: PropTypes.number,
      flag_xferOverride: PropTypes.number,
      facility_join: PropTypes.string,
      flag_homecontroller: PropTypes.number,
      lastactivity: PropTypes.string,
      promotion_eligible: PropTypes.bool,
      transfer_eligible: PropTypes.bool,
      roles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        cid: PropTypes.number,
        facility: PropTypes.string,
        role: PropTypes.string,
        created_at: PropTypes.string,
      })),
    }),
  }),
};

Layout.defaultProps = {
  store: {},
  auth: {
    isFetching: false,
    isAuthenticated: false,
    hasChecked: false,
    data: {},
  },
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  fetchAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
