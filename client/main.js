import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import {Meteor} from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import App from './App'

import './main.html';


Meteor.startup(()=> {
	render(<App />,document.getElementById('root'));
});