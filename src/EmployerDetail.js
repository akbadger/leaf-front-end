import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import UserSnapshot from './UserSnapshot'


class EmployerDetail extends Component {
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
        <UserSnapshot isEmployer={false}/>
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
            <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobdetail')}>Back to Job</button>
            <br/><br/>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <p>employer detail</p>
                        <img src="/img/redsquare.png" alt="profile"/>
						<h3>{this.state.detail.company_name}</h3>
                        <h4>{this.state.detail.contact_name}</h4>
                        <p>{this.state.detail.phone}</p>
                        <p>{this.state.detail.email}</p>
                        <p>{this.state.detail.about}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    );
  }
}

export default EmployerDetail;
