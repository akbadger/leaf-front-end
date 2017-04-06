import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class UserSnapshot extends Component {
	constructor(props) {
		super(props)
		this.state = {
			snapshot: {}
		}
	}
	componentWillMount() {
		// fetch(window.apiHost + '/api/users/' + window.user.id + '?token=' + window.user.token) 
		fetch(window.apiHost + '/api/users/' + window.user.id)
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
						{/*<div className="col-sm-6 text-center">*/}
							<img src="img/bluesquare.png" className="img-rounded" alt="profile"/>
							<h3>{this.state.snapshot.first_name} {this.state.snapshot.last_name}</h3>
							{/*<h4>{this.state.snapshot.username}</h4>*/}
							<p>{this.state.snapshot.bio}</p>
							{this.props.isEmployer ? <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/UserDetail')}>View Full Profile</button> : <span><button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/UserProfileEdit')}>Edit</button> <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/UserDetail')}>View Profile</button></span>}  
							
						{/*</div>*/}
						{/*<div className="col-sm-6">*/}
							
							{/*<p>{this.state.snapshot.skills[0]}</p>*/}
							
							{/*<div className="row">
								<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox1" value="option1"/> Lawncare
								</label>
								<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox2" value="option2"/> Construction
								</label>
								<label className="checkbox-inline">
								<input type="checkbox" id="inlineCheckbox3" value="option3"/> Food Service
								</label>
							</div>*/}
						</div>
            		</div>
        		</div>
			</div>
		</div>
	
    
        
        
    );
  }
}

export default UserSnapshot;
