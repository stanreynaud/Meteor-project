import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {Images} from '/database/Images';


const useStyles = makeStyles((theme) => ({
  upper: {
    display: 'flex',
	flexDirection: "row",
  },
  root: {
    display: 'flex',
	flexDirection: 'column',
    marginBottom: theme.spacing(2),
	marginLeft: theme.spacing(2),
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

// Ce composant gère la page de modification des tags
function Tags(props) {

  const classes = useStyles();

  return (
  <>

  </>
  );
}
export default Tags;
