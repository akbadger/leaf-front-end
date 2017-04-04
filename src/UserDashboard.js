import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import UserSnapshot from './UserSnapshot'
import JobSnapshot from './JobSnapshot'

class UserDashboard extends Component {
  render() {
    return (
      <div>
        <UserSnapshot/>
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2">
				<h2 className="text-center">Job Postings</h2>
				<JobSnapshot/>
				<JobSnapshot/>
			</div>
        </div>
    </div>
    );
  }
}

export default UserDashboard;
