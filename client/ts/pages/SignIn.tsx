import React, { PureComponent } from 'react';

import LoginForm from '../components/LoginForm';

class SignInPage extends PureComponent {
  public render(): React.ReactNode {
    return (
      <div style={{ height: '100%' }}>
        <LoginForm />
      </div>
    );
  }
}

export default SignInPage;
