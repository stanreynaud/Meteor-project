import React from 'react';
import { Router, Route, Switch } from 'react-router';
import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Search from './Search'
import Add from './Add'
import Tags from './Tags'




const push_add = () => {
	browserHistory.push("/")
}
const push_search = () => {
	browserHistory.push("/search")
}
const push_tags = () => {
	browserHistory.push("/tags")
}



export const renderRoutes = () => {

	return (
	  <div>
		<AppBar position="static" style={{margin: 15,display: 'flex', background:'#D5DBDB', width: window.innerWidth-45}}>
		  <Toolbar>
			<Button disableRipple disableElevation onClick={push_add} variant="contained" color="primary" 
				style={{margin: 10, background:'#797D7F'}}>
					Add an Image
			</Button>
			<Button disableRipple disableElevation onClick={push_search} variant="contained" color="primary" 
				style={{margin: 10,marginLeft: 0, background:'#797D7F'}}>
					Search for an Image
			</Button>
			<Button disableRipple disableElevation onClick={push_tags} variant="contained" color="primary" 
				style={{margin: 10, background:'#797D7F'}}>
					Change tags
			</Button>
		  </Toolbar>
		</AppBar>

		  
		<Router history={browserHistory}>
		  <Switch>
			<Route exact path="/" render={(props) => <Add />} />
			<Route exact path="/search" render={(props) => <Search />}/>
			<Route exact path="/tags" render={(props) => <Tags />}/>
		  </Switch>
		</Router>
	  </div>
	);
};