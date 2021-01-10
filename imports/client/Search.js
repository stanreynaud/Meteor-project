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


function Search(props) {
  const classes = useStyles();
  
  // Variables stockant les entrées de l'utilisateur
  const [search_results, set_search_results] = React.useState([]);
  
  let search_tags_value="";
  
  // Expressions régulières pour vérifier ce que l'utilisateur rentre
  const tags_regex = new RegExp("^[a-zA-Z]+(,[a-za-zA-Z]+)*$");

  // Fonctions pour actualiser les variables quand les entrées changent
  const handle_search_tags_Change = (event) => {
    set_search_tags_Value(event.target.value);
  };
  
  const searchImage = (event) => {
	if(tags_regex.test(search_tags_value)){
		set_search_results(test_array);
	} else {
		console.log("bad search tags")
	}
	
  }
  
  var test_array = ["https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
  "https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg",
  "https://epn.pevelecarembault.fr/wp-content/uploads/2016/02/photo-numrique.jpg"]
  
  

  return (
  <>	
	<div className={classes.upper}>
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
		<div>
		{search_results.map((image,index) => {
			<img className={classes.image} key={index} src={image} alt="Invalid image URL" width="500"/>
			console.log(index,image)
		})}
		</div>
	</div>
  </>
  );
}
export default Search;