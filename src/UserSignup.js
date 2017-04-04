import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserSignup extends Component {
  render() {
    return (
      <div>
        <p>User Signup</p>
			<div className="row">
				<div className="col-sm-5 col-sm-offset-1 text-center">
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

						<button type="submit" className="btn btn-default" onClick={() => browserHistory.push('/userdashboard')}>Submit</button>
				</form>
			</div>
			<div className="col-sm-5 col-sm-offset-1 text-center">
					<h3>Work History/Education</h3>
					<form>
						<div className="form-group">
							<label for="education">Education</label>
							<textarea className="form-control" id="education" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="work history">Work History</label>
							<textarea className="form-control" id="work_history" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="otherInterests">Other Interests</label>
							<textarea className="form-control" id="other_interests" placeholder=""/>
						</div>
							<h3>Skills and Abilities</h3>
							<div className="row">
								<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox1" value="option1"/> Lawncare
								</label>
								<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox2" value="option2"/> Construction
								</label>
								<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox3" value="option3"/> Food Service
								</label>
							</div>
							
							
							
				</form>
			</div>


		</div>    
    </div>
    );
  }
}

export default UserSignup;
