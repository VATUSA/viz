import React from 'react';
import { Container, Menu, Button, Image } from 'semantic-ui-react';
import '../semantic/dist/components/image.css';
import '../semantic/dist/components/button.css';

export default () => (
  <Container>
    <Menu.Item><Image size="small" src="https://www.vatusa.net/img/logo-dark.png" /></Menu.Item>
    <Menu.Item as="a" href="/">Home</Menu.Item>
    <Menu.Item as="a" href="/status">SS Viz</Menu.Item>
    <Menu.Item as="a">Load Stack</Menu.Item> {/* @TODO Only show this with proper role */ }
    <Menu.Menu position="right">
      <Menu.Item className="item">
        <Button as="a" primary>Log in</Button>
      </Menu.Item>
    </Menu.Menu>
  </Container>
);
