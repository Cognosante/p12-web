import React from 'react';
import { withRouter } from 'react-router-dom';
import Page from './page';

const LayoutWithAuth = withRouter(Page);

export default Component => () => <LayoutWithAuth component={Component} />;
