import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'

class EmployerSignup extends Component {
  render() {
    return (
      	<div>
		  <EmployerSnapshot/>
    		<div className="row">
				<div className="col-sm-6 col-sm-offset-3 ">
					<h3>Add/Edit Job</h3>
					<form>
						<div className="form-group">
							<label for="companyName">Company Name</label>
							<input type="company" className="form-control" id="company_name" placeholder=""/>
						</div>
						<div className="form-group">
							<label for="jobTitle">Job Title</label>
							<input type="jobTitle" className="form-control" id="job_title" placeholder=""/>
						</div>
						
						<div className="form-group">
							<label for="transportation">Transportation:</label>
							<select className="form-control">
								<option>Provided</option>
								<option>Not Provided</option>
							</select>
						</div>

						<div className="form-group">
							<label for="about">Description</label>
							<textarea className="form-control" id="description" placeholder=""/>
						</div>
                        <label for="skillsRequired">Skills Required</label>
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


						<button type="submit" className="btn btn-default" onClick={() => browserHistory.push('/employerdashboard')}>Submit</button>
				</form>
			</div>
		</div>
    </div>
    );
  }
}

export default EmployerSignup;
