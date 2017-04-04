import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class EmployerSignup extends Component {
  render() {
    return (
      	<div>
		  <p>Employer Signup</p>
    		<div className="row">
				<div className="col-sm-6 col-sm-offset-3 ">
					<h3>Basic Information</h3>
					<form>
						<div className="form-group">
							<label for="name">First Name</label>
							<input type="firstName" className="form-control" id="first_name" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="name">Last Name</label>
							<input type="lastName" className="form-control" id="last_name" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="username">Create a Username</label>
							<input type="username" className="form-control" id="username" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="password">Create a Password</label>
							<input type="password" className="form-control" id="password" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="email">Email (optional)</label>
							<input type="email" className="form-control" id="email" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="phone">Phone</label>
							<input type="phone" className="form-control" id="phone" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="communication">Preferred method of communication:</label>
							<select className="form-control">
								<option>Phone</option>
								<option>Email</option>
							</select>
						</div>

						<div className="form-group">
							<label for="about">About</label>
							<textarea className="form-control" id="about" placeholder=""/>
						</div>

						<button type="submit" className="btn btn-default" onClick={() => browserHistory.push('/employerdashboard')}>Submit</button>
				</form>
			</div>
		</div>
    </div>
    );
  }
}

export default EmployerSignup;
