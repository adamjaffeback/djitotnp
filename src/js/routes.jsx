import React from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import { Header } from './common/components/Header';
import HomeRouteHandler from './views/home';
import InstructionsRouteHandler from './views/instructions';

import '../assets/fonts/fonts.css';

const HeaderWithRouter = withRouter(props => <Header {...props} />);

module.exports = (
  <div className="container">
    <HeaderWithRouter />
    <hr />
    <div className="container__content">
      <Switch>
        <Route exact path="/" component={HomeRouteHandler} />
        <Route path="/\instructions" component={InstructionsRouteHandler} />
        <Route path="*" component={HomeRouteHandler} />
      </Switch>
    </div>
  </div>
);
