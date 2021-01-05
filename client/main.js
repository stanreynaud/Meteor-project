import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom'

import { renderRoutes } from '../imports/client/routes.js';
import './main.html'




Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('root'));
});