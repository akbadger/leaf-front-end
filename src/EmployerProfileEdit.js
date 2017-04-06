import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'

class EmployerProfileEdit extends Component {
  render() {
    return (
      <div>
	  	<EmployerSnapshot isEmployer={true}/>
		<div className="row">
				<div className="col-sm-6 col-sm-offset-3 ">
					<h3>Edit Profile</h3>
						<div className="form-group">
							<label htmlFor="email">Email (optional)</label>
							<input type="email" className="form-control" id="email" placeholder=""/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input type="phone" className="form-control" id="phone" placeholder=""/>
						</div>
						<div className="form-group">
							<label htmlFor="communication">Preferred method of communication:</label>
							<select className="form-control">
								<option>Phone</option>
								<option>Email</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="about">About</label>
							<textarea className="form-control" id="about" placeholder=""/>
						</div>
							<button type="button" className="btn btn-default" onClick={() => browserHistory.push('/employerdashboard')}>Save</button>
						
			</div>
		</div>
        
    </div>
    );
  }
}

export default EmployerProfileEdit;
