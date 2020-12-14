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
  const classes = useStyles();
  const [url_value, set_url_Value] = React.useState('');
  const [tags_value, set_tags_Value] = React.useState('');

  const handle_url_Change = (event) => {
    set_url_Value(event.target.value);
  };
  
  
  const handle_tags_Change = (event) => {
    set_tags_Value(event.target.value);
  };
  
  
  const addImage = (event) => {
	event.preventDefault();
	Images.insert({
		url: url_value,
		tags: tags_value,
	});
	
	console.log(Images.find().fetch());
  }
  

  return (
  <>
  <div className={classes.upper}>
	<div>
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
</div	>

</>
  );
}
export default App;