// import css
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import { render } from 'react-dom';

import ThemingLayout from './layouts/Theming';

document.addEventListener('DOMContentLoaded', () => {
  render(<ThemingLayout />, document.getElementById('main'));
});
