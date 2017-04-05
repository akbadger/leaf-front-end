import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserProfileEdit extends Component {
  render() {
    return (
      <div>
        <p>Edit User Profile</p>
				<form>
						<div> className="form-group">
							<label for="email">Email (optional)</label>
							<input type="text" className="form-control" id="email" name="email" placeholder="" onChange={(e) => this.setState({email: e.target.value})}/>
						</div>
						<div className="form-group">
							<label for="phone">Phone</label>
							<input type="text" className="form-control" id="phone" name="phone" placeholder="" onChange={(e) => this.setState({phone: e.target.value})}/>
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
			<div className="col-sm-5 col-sm-offset-1 text-center">
					<h3>Work History/Education</h3>
					
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
						


        <button type="button" className="btn btn-default" onClick={() => browserHistory.push('/userdashboard')}>Save</button>
		</div>
		</div>
    );
  }
}

export default UserProfileEdit;
