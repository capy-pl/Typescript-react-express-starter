import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignInPage from './pages/SignIn';

class App extends Component {
  public render(): React.ReactNode {
    return (
      <Router>
        <Route path='/' component={SignInPage} />
      </Router>
    );
  }
}

export default hot(App);
