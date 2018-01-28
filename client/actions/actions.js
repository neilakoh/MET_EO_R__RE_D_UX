import { Meteor } from 'meteor/meteor';

export function saveName(name) {
	return (dispatch) => {
		Meteor.call("sendName", name, (err, res)=>{
			if(err) {
				dispatch(errorHandler(err));
			} else {
				dispatch(successHandler(res));
			}
		});
	}
}

export function successHandler(value) {
	console.log('success',value);
	return {
		type: 'SUCCESS', value
	}
}

export function errorHandler(value) {
	console.log('error',value);
	return {
		type: 'FAILED', value
	};
}