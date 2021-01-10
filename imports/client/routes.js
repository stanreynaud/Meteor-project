import React from 'react';
import { Router, Route, Switch } from 'react-router';
import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Home from './Home'
import Add from './Add'
import Search from './Search'




const push_home = () => {
	browserHistory.push("/")
}
const push_add = () => {
	browserHistory.push("/add")
}
const push_search = () => {
	browserHistory.push("/search")
}



export const renderRoutes = () => {

	return (
	  <div>
		<AppBar position="static" style={{margin: 15, background:'#D5DBDB', width: window.innerWidth-45}}>
		  <Toolbar>
			<Button disableRipple disableElevation onClick={push_home} variant="contained" color="primary" style={{margin: 10, background:'#797D7F'}}>Home</Button>
			<Button disableRipple onClick={push_add} variant="contained" color="primary" style={{margin: 10, background:'#797D7F'}}>Add</Button>
			<Button disableRipple onClick={push_search} variant="contained" color="primary" style={{margin: 10, background:'#797D7F'}}>Search</Button>
		  </Toolbar>
		</AppBar>

		  
		<Router history={browserHistory}>
		  <Switch>
			<Route exact path="/" render={(props) => <Home />} />
			<Route exact path="/add" render={(props) => <Add />}/>
			<Route exact path="/search" render={(props) => <Search />}/>
		  </Switch>
		</Router>
	  </div>
	);
};