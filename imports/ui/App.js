import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import * as courseAction from '../../client/actions/actions';
import { connect } from 'react-redux';

// App component - represents the whole app
class App extends Component {
  constructor() {
    super();

    this.saveTask = this.saveTask.bind(this);
  }

  saveTask() {
    const { actions } = this.props;
    let data = {
      name: "save this data",
      createdAt: new Date(),
      author: "neil anthony te",
      status: "progress",
    }

    actions.saveTask(data);
  }

  render() {
    console.log(this.props.saveTaskResult);
    return (
      <div className="container">
        <button type="button" className="btn btn-primary" onClick={this.saveTask} >Save Task</button>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    saveTaskResult: state.saveTask,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
