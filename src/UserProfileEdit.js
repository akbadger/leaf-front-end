import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class UserProfileEdit extends Component {
	constructor(props) {
		super(props)
		this.addSkill = this.addSkill.bind(this)
		this.editProfile = this.editProfile.bind(this)
		this.lookupSkills = this.lookupSkills.bind(this)

		this.state = {
			email: '',
			phone: '',
			communication: '',
			about: '',
			skills: [],
			education: '',
			work_history: '',
			interests: '',
			lookupSkills: []
		}
	 }

	 componentWillMount(){
		 this.lookupSkills()
		 
		 fetch(window.apiHost + '/api/users/' + window.user.id)
		.then(response => response.json())
		.then(response => this.setState({
			skills: response.user.skills.map(skill => skill.id)
		}))
	 }

	 addSkill(e) {
		 let skills = this.state.skills

		 if (e.target.checked) {
			skills.push(Number(e.target.value))
		 }
		 else {
			skills = skills.filter(skillId => skillId !== Number(e.target.value))
		 }

		 this.setState({skills:skills})
	 }

	 lookupSkills() {
		fetch(window.apiHost + '/api/skills')
		.then(function(response) {
				return response.json();
			})
		.then((response) => {
				this.setState({lookupSkills:response.skills})
			})
	 }

	 editProfile() {
		fetch(window.apiHost + '/api/users/' + window.user.id , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
			token: window.user.token,
            user: {
                email: this.state.email,
				phone: this.state.phone,
				communication: this.state.communication,
				about: this.state.about,
				skills: this.state.skills,
				education: this.state.education,
				work_history: this.state.workHistory,
				interests: this.state.interests
            }
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
			browserHistory.push('/userdashboard')
        })
	}

  render() {
	  const skills = this.state.lookupSkills.map(skill => (
		  	<label className="checkbox" key={skill.id}>
				<input type="checkbox" value={skill.id} checked={this.state.skills.includes(skill.id)} onChange={this.addSkill} /> {skill.name}
			</label>
		))

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
							<select className="form-control" onChange={(e) => this.setState({communication: e.target.value})}>
								<option>Phone</option>
								<option>Email</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="about">About</label>
							<textarea className="form-control" id="about" placeholder="" onChange={(e) => this.setState({about: e.target.value})}/>
						</div>
						</div>
						</div>
					

						<h3>Skills and Abilities</h3>
						<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
							<div className="row">
								{skills}
							</div>
						</div>
				</div>

					<h3>Work History/Education <br/>(Optional)</h3>
					
					<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<div className="form-group">
							<label htmlFor="education">Education</label>
							<textarea className="form-control" id="education" placeholder="" onChange={(e) => this.setState({education: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="work history">Work History</label>
							<textarea className="form-control" id="work_history" placeholder="" onChange={(e) => this.setState({workHistory: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="otherInterests">Other Interests</label>
							<textarea className="form-control" id="other_interests" placeholder="" onChange={(e) => this.setState({interests: e.target.value})}/>
						</div>
						<br/>
						<div className="form-group text-center"><button type="button" className="btn btn-default" onClick={this.editProfile}>Save</button></div>
					
		
	
	</div>
					
					</div>
				</div>
				
						
    );
  }
}

export default UserProfileEdit;
