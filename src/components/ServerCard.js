import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import '../semantic/dist/components/image.css';
import '../semantic/dist/components/button.css';
import '../semantic/dist/components/card.css';

const ServerCard = node => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Button floated="right" size="mini" color={ node.node.State === 'ready' ? 'green' : 'red' } />
        <Card.Header>
          {node.node.Name}
        </Card.Header>
        <Card.Meta>
            Docker {node.node.Version}
        </Card.Meta>
        <Card.Description>
            List of tasks here...
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>);

export default ServerCard;
