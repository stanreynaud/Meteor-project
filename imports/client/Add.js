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


function Add(props) {
  // 
  const classes = useStyles();
  
  // Variables stockant les entrées de l'utilisateur
  const [url_value, set_url_Value] = React.useState('');	
  //const [tags_value, set_tags_Value] = React.useState('');
  
  let tags_value="";
  
  // Expressions régulières pour vérifier ce que l'utilisateur rentre
  const tags_regex = new RegExp("^[a-zA-Z]+(,[a-za-zA-Z]+)*$");
  const image_regex = new RegExp(".(jpg|gif|png)$");

  // Fonctions pour actualiser les variables quand les entrées changent
  const handle_url_Change = (event) => {
    set_url_Value(event.target.value);
  };
  const handle_tags_Change = (event) => {
    //set_tags_Value(event.target.value);
	tags_value=event.target.value;
  };
  
  // Fonctions pour ajouter et chercher une image
  const addImage = (event) => {
	event.preventDefault();
	if(tags_regex.test(tags_value) && image_regex.test(url_value)) {
		console.log(tags_value)
		Images.insert({
			url: url_value,
			tags: tags_value,
		});
	} else {
		console.log("bad url or bad tags")
	}
	
	console.log(Images.find().fetch());
  }
  
  var test_array = ["https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  "https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg",
  "https://epn.pevelecarembault.fr/wp-content/uploads/2016/02/photo-numrique.jpg"]
  
  

  return (
  <>
  {console.log("render")}
  <div className={classes.upper}>
		<div>
		<h1 className={classes.root}>Upload a new image</h1>
			<form className={classes.root} noValidate autoComplete="off">
			  <TextField id="outlined-basic" 
			  label="Image URL"
			  variant="outlined"
			  onChange={handle_url_Change}/>
			</form>
			
			
			<form className={classes.root} noValidate autoComplete="off">
			  <TextField
			  id="outlined-textarea"
			  label="Image tags"
			  rows={4}
			  multiline
			  variant="outlined"
			  onChange={handle_tags_Change}/>
			</form>
			
			<Button className={classes.button} onClick={()=>{addImage(event)}}variant="contained" disableRipple>Save to DB</Button>
		
		</div>	
		{image_regex.test(url_value)?<img className={classes.image} src={url_value} alt="Invalid image URL" width="500"/>:null}
	</div>
	</>
  );
}
export default Add;