import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class EmployerProfileEdit extends Component {
  render() {
    return (
      <div>
        <p>Edit Employer Profile</p>
        <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/employerdashboard')}>Save</button>
    </div>
    );
  }
}

export default EmployerProfileEdit;
