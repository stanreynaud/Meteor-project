import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const browserHistory = createBrowserHistory();

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import App from './App'

export const renderRoutes = () => (
  <div>

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          Image server  
        </Typography>
        <Button disableRipple variant="contained" color="primary" style={{margin: 15}}>Add</Button>
		<Button disableRipple variant="contained" color="primary" style={{margin: 15}}>Search</Button>
		<Button disableRipple variant="contained" color="primary" style={{margin: 15}}>Tags</Button>
      </Toolbar>
    </AppBar>
	  
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/lists/:id" component={App}/>
        <Route exact path="/signin" component={App}/>
        <Route exact path="/join" component={App}/>
      </Switch>
    </Router>
  
  </div>
);