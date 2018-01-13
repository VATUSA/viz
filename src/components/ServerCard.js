import React from 'react';
import { Button, Card, Segment } from 'semantic-ui-react';
import '../semantic/dist/components/image.css';
import '../semantic/dist/components/button.css';
import '../semantic/dist/components/card.css';

import TaskCard from './TaskCard';

const ServerCard = (props) => {
  console.dir(props);
  return (
    <Card>
      <Card.Content>
        <Button floated="right" size="mini" color={ props.node.State === 'ready' ? 'green' : 'red' } />
        <Card.Header>
          {props.node.Name}
        </Card.Header>
        <Card.Meta>
          Docker {props.node.Version}
        </Card.Meta>
        <Card.Description>
          <Segment.Group raised>
            {props.tasks.sort((a, b) => a.Service.Name > b.Service.Name)
              .map(t => <TaskCard task={ t } key={ t.ID } />)}
          </Segment.Group>
        </Card.Description>
      </Card.Content>
    </Card>);
};

export default ServerCard;
