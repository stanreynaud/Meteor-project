import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {Images} from '/Images';

const useStyles = makeStyles((theme) => ({
  upper: {
    display: 'flex',
	flexDirection: "row",
	width: "100%",
	height: "100%"

  },
  root: {
    display: 'flex',
	flexDirection: "column",
    margin: theme.spacing(3),
    
  },
  image: {
    display: 'flex',
	flexDirection: "column",
	float: 'right',
    margin: theme.spacing(3),

  },
  button: {
    display: 'flex',
	flexDirection: "column",
    margin: theme.spacing(3),

  },
  hide: {
    display: 'none',
  },
}));


function App() {
  // 
  const classes = useStyles();
  
  // Le texte entré par l'utilisateur sera stocké dans ces variables
  const [url_value, set_url_Value] = React.useState('');
  const [tags_value, set_tags_Value] = React.useState('');
  const [search_tags_value, set_search_tags_Value] = React.useState('');
  
  // Expressions régulières pour vérifier ce que l'utilisateur rentre
  const tags_regex = new RegExp("^[a-zA-Z]+(,[a-za-zA-Z]+)*$");
  const image_regex = new RegExp(".(jpg|gif|png)$");

  // Fonctions pour actualiser les variables quand les entrées changent
  const handle_url_Change = (event) => {
    set_url_Value(event.target.value);
  };
  const handle_tags_Change = (event) => {
    set_tags_Value(event.target.value);
  };
  const handle_search_tags_Change = (event) => {
    set_search_tags_Value(event.target.value);
  };
  
  
  const addImage = (event) => {
	event.preventDefault();
	
	if(tags_regex.test(tags_value) && image_regex.test(url_value)) {
		Images.insert({
			url: url_value,
			tags: tags_value,
		});
	} else {
		console.log("bad url or bad tags")
	}
	
	console.log(Images.find().fetch());
  }
  
  const searchImage = (event) => {
	if(tags_regex.test(search_tags_value)){
		// Les tags sont valides, on peut chercher les images
	} else {
		console.log("bad search tags")
	}
	
  }
  
  
  

  return (
  <>
  <div className={classes.upper}>
		<div>
		<h1 className={classes.root}>Upload a new image</h1>
			<form className={classes.root} noValidate autoComplete="off">
			  <TextField id="outlined-basic" 
			  label="Image URL" 
			  variant="outlined" 
			  value={url_value} 
			  onChange={handle_url_Change}/>
			</form>
			
			
			<form className={classes.root} noValidate autoComplete="off">
			  <TextField
			  id="outlined-textarea"
			  label="Image tags"
			  rows={4}
			  multiline
			  variant="outlined"
			  value={tags_value} 
			  onChange={handle_tags_Change}/>
			</form>
			
			<Button className={classes.button} onClick={()=>{addImage(event)}}variant="contained" disableRipple>Save to DB</Button>
		
		</div>	
		<img className={classes.image} src={url_value} alt="Preview" width="500"/>
	</div>
	
	
	<div className={classes.upper} style={{marginTop: 100}}>
		<div>
			<h1 className={classes.root}>Search for an image</h1>
			<form className={classes.root} noValidate autoComplete="off">
			  <TextField id="outlined-basic" 
			  label="Search tags" 
			  variant="outlined" 
			  value={search_tags_value} 
			  onChange={handle_search_tags_Change}/>
			</form>
			
			<Button className={classes.button} onClick={()=>{searchImage(event)}}variant="contained" disableRipple>Search in DB</Button>
		</div>
	</div>
	
	</>
  );
}
export default App;