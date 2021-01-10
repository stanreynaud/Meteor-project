import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
	float: 'left',
    margin: theme.spacing(3),

  },
  button: {
    display: 'flex',
	flexDirection: "column",
    margin: theme.spacing(3),

  },
  card: {
    display: 'flex',
	flexDirection: "column",
	float: 'left',
	maxWidth: 200,
	margin: theme.spacing(1),
  },
  media: {
    height: 140
  },
  hide: {
    display: 'none',
  },
}));


function App(props) {
  const classes = useStyles();

  return (
	<div>
		<Grid container>
			{Images.find().fetch().map(obj => (
				<Grid item xs={3} className={classes.card}>
					<div>
						{console.log("loop")}
						<Card>
						  <CardActionArea disableRipple>
							<CardMedia
							  className={classes.media}
							  image={obj.url}
							/>
							<CardContent>
							  <Typography variant="body2" color="textSecondary" component="p">
							   {obj.tags}
							  </Typography>
							</CardContent>
						  </CardActionArea>
						</Card>
					</div>
				</Grid>
			))}
		</Grid>
	</div>
  );
}
export default App;