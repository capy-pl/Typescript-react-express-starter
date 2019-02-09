import React from 'react';
import { Container } from 'semantic-ui-react';

import LoginForm from '../components/LoginForm';

const style = {
  height: '100%',
};

const ThemingLayout = () => (
  <Container style={style}>
    <LoginForm />
  </Container>
);

export default ThemingLayout;
