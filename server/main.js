import { Meteor } from 'meteor/meteor';
import {Tasks} from '../imports/collections/index.js';

Meteor.startup(() => {

});

Meteor.methods({
  sendName(name) {
  	return name;
  },
  saveTask(data) {
  	return Tasks.insert(data, (error, result)=>{
  		if(error) {
  			return error;
  		} else {
  			return result;
  		}
  	});
  }
});