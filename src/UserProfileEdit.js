import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserProfileEdit extends Component {
	//constructor(props) {
	//	super(props)
	//	this.editProfile = this.editProfile.bind(this)
	// }
  render() {
    return (
    <div>
        <h3>Edit Profile</h3>
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<div className="form-group">
							<label htmlFor="email"> Email (optional)</label>
							<input type="text" className="form-control" id="email" name="email" placeholder="" onChange={(e) => this.setState({email: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="phone">Phone</label>
							<input type="text" className="form-control" id="phone" name="phone" placeholder="" onChange={(e) => this.setState({phone: e.target.value})}/>
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
						</div>
						</div>
					

						<h3>Skills and Abilities</h3>
						<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
							<div className="row">
								<label className="checkbox">
								<input type="checkbox" id="checkbox1" value="option1"/> Lawncare
								</label>
								<label className="checkbox">
								<input type="checkbox" id="checkbox2" value="option2"/> Construction
								</label>
								<label className="checkbox">
								<input type="checkbox" id="checkbox3" value="option3"/> Food Service
								</label>
							</div>
						</div>
				</div>

					<h3>Work History/Education <br/>(Optional)</h3>
					
					<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<div className="form-group">
							<label htmlFor="education">Education</label>
							<textarea className="form-control" id="education" placeholder=""/>
						</div>
						<div className="form-group">
							<label htmlFor="work history">Work History</label>
							<textarea className="form-control" id="work_history" placeholder=""/>
						</div>
						<div className="form-group">
							<label htmlFor="otherInterests">Other Interests</label>
							<textarea className="form-control" id="other_interests" placeholder=""/>
						</div>
						<br/>
						<div className="form-group text-center"><button type="button" className="btn btn-default" onClick={() => browserHistory.push('/userdashboard')}>Save</button></div>
					
		
	
	</div>
					
					</div>
				</div>
				
						
    );
  }
}

export default UserProfileEdit;
