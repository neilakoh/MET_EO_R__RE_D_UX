import { Meteor } from 'meteor/meteor';

export function saveName(name) {
	return (dispatch) => {
		Meteor.call("sendName", name, (err, res)=>{
			if(err) {
				dispatch(errorHandler('FAILED', err));
			} else {
				dispatch(successHandler('SUCCESS', res));
			}
		});
	}
}

export function saveTask(data) {
	return (dispatch) => {
		Meteor.call("saveTask", data, (err, res)=>{
			if(err) {
				let response ={
					success: false,
					data: {},
					documentId: err
				};
				dispatch(errorHandler('SAVE_TASK_FAILED', err));
			} else {
				let response ={
					success: true,
					data: data,
					documentId: res
				};
				dispatch(successHandler('SAVE_TASK_SUCCESS', response));
			}
		});
	}
}

export function successHandler(type, value) {
	return {
		type: type, value
	}
}

export function errorHandler(type, value) {
	return {
		type: type, value
	};
}