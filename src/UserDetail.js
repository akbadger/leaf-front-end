import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'
import UserSnapshot from './UserSnapshot'


class UserDetail extends Component {
    constructor(props) {
		super(props)
		this.state = {
			detail: {
                skills: []
            }
		}
	}
	componentWillMount() {
		// fetch(window.apiHost + '/api/users/' + window.user.id + '?token=' + window.user.token) 
		fetch(window.apiHost + '/api/users/' + window.user.id)
		.then(response => response.json())
		.then(response => this.setState({detail: response.user}))
	}
  render() {
    const snapshot = ''//window.user.role === 'employer' ? <EmployerSnapshot/> : <UserSnapshot/>
    const skills = this.state.detail.skills.map(skill => <div className="label label-success" key={skill.id}>{skill.name}</div>)

    return (
    <div>
        {snapshot}
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
            {/*{window.user.role === 'employer' ? <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobmatches')}>Back to Jobs</button> : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/userdashboard')}>Back to Dashboard</button>}*/}
            <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobmatches')}>Back to Matches</button>
				<h2 className="text-center">User Full Profile</h2>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <img src="img/redsquare.png" alt="profile"/>
						<h3>{this.state.detail.first_name} {this.state.detail.last_name}</h3>
						{/*<p>{this.state.detail.username}</p>*/}
                        <h4>Contact Information</h4>
                        <p>{this.state.detail.phone}</p>
                        <p>{this.state.detail.email}</p>
                        <p>{this.state.detail.bio}</p>
                        <h4>Skill Sets</h4>
                        <div>{skills}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    );
  }
}

export default UserDetail;
