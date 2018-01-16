import React from 'react';
import PropTypes from 'prop-types';
import { Container, Menu, Button, Image } from 'semantic-ui-react';
import '../semantic/dist/components/image.css';
import '../semantic/dist/components/button.css';

class MainMenu extends React.Component {
  render() {
    let hasWTRole = false;
    if (this.props.auth.isAuthenticated) {
      for (let i = 0; i < this.props.auth.data.roles.length; i += 1) {
        if (this.props.auth.data.roles[ i ].role.substr(0, 2) === 'US' &&
            this.props.auth.data.roles[ i ].facility === 'ZHQ') {
          hasWTRole = true;
        }
        if (this.props.auth.data.roles[ i ].role === 'USWT' &&
            this.props.auth.data.roles[ i ].facility === 'ZHQ') {
          hasWTRole = true;
        }
      }
    }

    return (
      <Container>
        <Menu.Item><Image size="small" src="https://www.vatusa.net/img/logo-dark.png" /></Menu.Item>
        <Menu.Item as="a" href="/">Home</Menu.Item>
        <Menu.Item as="a" href="/status">SS Viz</Menu.Item>
        { hasWTRole && <Menu.Item as="a">Load Stack</Menu.Item> }
        <Menu.Menu position="right">
          <Menu.Item className="item">
            { !this.props.auth.isAuthenticated &&
              <Button as="a" primary>Log in</Button> }
            { this.props.auth.isAuthenticated &&
              <span>{this.props.auth.data.fname} {this.props.auth.data.lname}</span>}
          </Menu.Item>
        </Menu.Menu>
      </Container>
    );
  }
}

MainMenu.propTypes = {
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

MainMenu.defaultProps = {
  auth: {
    isFetching: false,
    isAuthenticated: false,
    hasChecked: false,
    data: {},
  },
};

export default MainMenu;
