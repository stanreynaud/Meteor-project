import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
	flexDirection: "column",
    margin: theme.spacing(3),
	width: "40%",
    height: "100%",
    
  },
  image: {
    display: 'block',
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

  return (
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
		
		
		

		<div className={classes.image}>
			<img src={url_value} alt="Invalid URL" />
		</div>
	</div>
  );
}
export default App;