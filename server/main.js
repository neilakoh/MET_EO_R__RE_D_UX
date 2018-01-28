import { Meteor } from 'meteor/meteor';
import {Tasks} from '../imports/collections/index.js';

Meteor.startup(() => {
  Tasks.insert({
      name: "neil",
    });
});

Meteor.methods({
  sendName(name) {
  	return name;
  }
});