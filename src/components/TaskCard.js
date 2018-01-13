import React from 'react';
import { Button, Segment } from 'semantic-ui-react';
import '../semantic/dist/components/image.css';
import '../semantic/dist/components/button.css';
import '../semantic/dist/components/segment.css';

const TaskCard = props => (
  <Segment style={ { backgroundColor: 'black' } }>

    <h4>
      {props.task.Service.Name}
      <Button floated="right" size="mini" color={ props.task.Status === 'running' ? 'green' : 'red' } />
    </h4>
  </Segment>);

export default TaskCard;
