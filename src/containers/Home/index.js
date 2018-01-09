import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const Home = () => (
  <Container>
    <p>
      VATUSA is built utilizing the powers of many pieces of technology.  These
      include Linux KVM, Ubuntu, NGINX, PHP, MySQL, JavaScript, React, CSS,
      Go, Perl, and Docker.  All of these put together create the vast suite known as
      VATUSA.
    </p>
    <p>
      Each web application is built inside of a Docker Container that is deployed
      on a node within VATUSA&apos;s&nbsp;
      <Link to="https://docs.docker.com/engine/swarm/key-concepts/" target="_blank" rel="noopener noreferrer">Docker Swarm</Link>.
      To ease the burden of swarm management as well as provide a visual way to check
      the status of VATUSA&apos;s various web systems, this system was created.
    </p>
    <p>
      Welcome aboard the SS Dock, the head of the Docker Swarm for VATUSA.  She sails
      the mighty seas with her containers to deliver the expected experience at the
      hands of a mighty crew.  The inside of her hull is readibly accessible to those
      who dare venture below decks.&nbsp;
      <Link to="https://github.com/dhawton/docker-viz-monitor" target="_blank" rel="noopener noreferrer">dhawton/docker-viz-monitor</Link>&nbsp;
      works as the API worker between Docker and this application, and&nbsp;
      <Link to="https://github.com/vatusa/viz" target="_blank" rel="noopener noreferrer">vatusa/viz</Link> works as the front facing side.
    </p>
    <p>
      Once again, welcome aboard the SS Dock, please mind your step.
    </p>
  </Container>
);

export default Home;
