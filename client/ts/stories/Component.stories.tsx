import { storiesOf } from '@storybook/react';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

const stories = storiesOf('Component', module);

stories.add(
  'Normal Button',
  () => (
    <Button>Normal</Button>
  ));
