import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserProfileEdit extends Component {
  render() {
    return (
      <div>
        <p>Edit User Profile</p>
        <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/userdashboard')}>Save</button>
    </div>
    );
  }
}

export default UserProfileEdit;
