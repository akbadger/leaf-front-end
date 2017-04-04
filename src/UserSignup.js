import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserSignup extends Component {
  render() {
    return (
      <div>
        <p>User Signup</p>
        <button type="submit" className="btn btn-default" onClick={() => browserHistory.push('/userdashboard')}>Submit</button>
    </div>
    );
  }
}

export default UserSignup;
