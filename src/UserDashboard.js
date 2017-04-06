import React, { Component } from 'react';
import UserSnapshot from './UserSnapshot'
import JobSnapshot from './JobSnapshot'

class UserDashboard extends Component {
  // componentWillMount() {
   // if (!window.user.token) {
  //    location.href = '/'
  //  }
 // }
  render() {
    return (
      <div>
        <UserSnapshot isEmployer={false}/>
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
