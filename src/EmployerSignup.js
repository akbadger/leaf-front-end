import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class EmployerSignup extends Component {
  render() {
    return (
      <div>
        <p>Employer Signup</p>
        <button type="submit" className="btn btn-default" onClick={() => browserHistory.push('/employerdashboard')}>Submit</button>
    </div>
    );
  }
}

export default EmployerSignup;
