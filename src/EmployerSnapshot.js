import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class EmployerSnapshot extends Component {
	constructor(props) {
		super(props)
		this.state = {
			snapshot: {}
		}
	}
	componentWillMount() {
		// fetch(window.apiHost + '/api/users/' + window.user.id + '?token=' + window.user.token) 
		fetch(window.apiHost + '/api/employers/' + window.user.id)
		.then(response => response.json())
		.then(response => this.setState({snapshot: response.user}))
	}

  render() {
    return (
   <div>
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
				<div className="panel panel-default">
            		<div className="panel-body text-center">
						<img src="img/redsquare.png" className="img-rounded" alt="profile"/>
						<h3>{this.state.snapshot.company_name}</h3>
						<h4>{this.state.snapshot.contact_name}</h4>
						<p>{this.state.snapshot.about}</p>
						{this.props.isEmployer ? <span><button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/EmployerProfileEdit')}>Edit</button> <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/EmployerDetail')}>View Profile</button></span> : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/UserDetail')}>View Full Profile</button>}  
        			</div>
            	</div>
        	</div>
		</div>
	</div>
    );
  }
}

export default EmployerSnapshot;
