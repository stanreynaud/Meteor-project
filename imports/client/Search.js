import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Images} from '/database/Images';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
	flexDirection: 'column',
    marginBottom: theme.spacing(2),
	marginLeft: theme.spacing(1),
  },
  grid: {
    display: 'flex',
	wrap: 'wrap',
    marginBottom: theme.spacing(2),
	marginLeft: theme.spacing(1),
  },
  image: {
    display: 'flex',
	flexDirection: 'column',
	float: 'left',
    margin: theme.spacing(3),

  },
  button: {
    display: 'flex',
	flexDirection: 'column',
    margin: theme.spacing(3),

  },
  card: {
    display: 'flex',
	flexDirection: 'column',
	float: 'left',
	maxWidth: 200,
	margin: theme.spacing(1),
  },
  media: {
    height: 140,
  },
  hide: {
    display: 'none',
  },
}));


function Search(props) {
  const classes = useStyles();

  // Variables stockant les entrées de l'utilisateur
  const [search_tags_value, set_search_tags_value] = React.useState("");

  // Expressions régulières pour vérifier ce que l'utilisateur rentre
  const tags_regex = new RegExp("^$|[a-zA-Z]+(,[a-za-zA-Z]+)*$")
  const valid_search_query = tags_regex.test(search_tags_value)

  // Fonctions pour actualiser les variables quand les entrées changent
  const handle_search_tags_Change = (event) => {
    set_search_tags_Value(event.target.value)
  };

  const unavailable_image = "https://thumbs.dreamstime.com/b/image-unavailable-icon-simple-illustration-vector-stock-174927559.jpg"


  let search_results = [];
  if (valid_search_query) {
	search_results = Images.find().fetch()
	console.log(search_results)
  }


  return (
  <>
	<div className={classes.root}>
		<div>
			<h1 className={classes.root}>Search for an image</h1>
			<TextField id="outlined-basic"
				style={{width:"450px"}}
				className={classes.root}
				label="Search tags"
				variant="outlined"
				value={search_tags_value}
				onChange={(event) => set_search_tags_value(event.target.value)}
				helperText={valid_search_query?null:"Tags must be words separated by ','"}
			/>
		</div>
	</div>
	<Grid container className={classes.grid}>
		{search_results.map(obj => (
			<Grid item xs={3} className={classes.card} key={obj._id}>
				<div>
					<Card>
						<CardActionArea disableRipple>
							<CardMedia
								className={classes.media}
								image={obj.url?obj.url:unavailable_image}
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary">
									{obj.tags}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
			</Grid>
		))}
	</Grid>
  </>
  );
}
export default Search;
