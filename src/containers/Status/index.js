import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import '../../semantic/dist/components/container.css';
import '../../semantic/dist/components/grid.css';

import ServerCard from '../../components/ServerCard';
import { fetchNodes } from '../../redux/actions/nodes';

let nodeDispatchTimer;

class Status extends React.Component {
  componentDidMount() {
    this.props.fetchNodes();

    nodeDispatchTimer = setInterval(() => this.props.fetchNodes(), 1000);
  }

  componentWillUnmount() {
    clearInterval(nodeDispatchTimer);
    nodeDispatchTimer = null;
  }

  renderNodesList() {
    const { data } = this.props;
    const list = data.map(node => <ServerCard key={ node.ID } node={ node } />);
    return list;
  }

  render() {
    return (
      <Container>
        <p>
          Status of nodes and assigned tasks
        </p>
        {this.renderNodesList()}
      </Container>
    );
  }
}

Status.propTypes = {
  fetchNodes: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.string,
    Name: PropTypes.String,
    State: PropTypes.string,
    Role: PropTypes.String,
    Version: PropTypes.String,
    Tasks: PropTypes.arrayOf(PropTypes.shape({
      ID: PropTypes.string,
      Image: PropTypes.string,
      Hostname: PropTypes.string,
      ServiceID: PropTypes.string,
      NodeID: PropTypes.string,
      Status: PropTypes.string,
      DesiredStatus: PropTypes.string,
    })),
  })),
};

Status.defaultProps = {
  data: [],
};

const mapStateToProps = state => ({
  data: state.nodes.data,
});

const mapDispatchToProps = {
  fetchNodes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Status);
