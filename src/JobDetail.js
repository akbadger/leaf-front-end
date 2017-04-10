import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'
import UserSnapshot from './UserSnapshot'

class JobDetail extends Component {
    // constructor(props) {
    //     super(props)
    //     this.lookupSkills = this.lookupSkills.bind(this)
    //     this.state = {
    //         skills: []
    //     }
    // }

    // componentWillMount() {
    //     this.lookupSkills()
    // }

    // lookupSkills() {
	// 	fetch(window.apiHost + '/api/skills')
	// 	.then(function(response) {
	// 			return response.json();
	// 		})
	// 	.then((response) => {
	// 			this.setState({lookupSkills:response.skills})
	// 		})
	//  }

  render() {
    //   const skills = this.props.job.skills.map(skill => <div className="label label-success" key={skill.id}>{skill.name}</div>)
    return (
    <div>
        <div className="row">
			{window.user.role === 'employer' ? <EmployerSnapshot/> : <UserSnapshot/> }
            <div className="col-sm-8 col-sm-offset-2">
            {window.user.role === 'employer' ? <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Jobs</button> : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/dashboard')}>Back to Dashboard</button>}
            <br/><br/>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <img src="https://unsplash.it/200/?random" alt="profile logo"/>
						<h3>{this.props.title}</h3>
						<h4>{this.props.company_name}</h4>
                        <h4>{this.props.description}</h4>
                        <p>{this.props.contact_name}</p>
                        <p>{this.props.phone}</p>
                        {/*<p>skills: {this.props.skills}</p>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    );
  }
}

export default JobDetail;
