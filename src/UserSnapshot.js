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
            		<div className="panel-body">
						<div className="col-sm-6">
							<img src="/img/moonrock.jpg" alt="profile"/>
							<h3>{this.state.snapshot.first_name} {this.state.snapshot.last_name}</h3>
							<h4>{this.state.snapshot.username}</h4>
							{this.props.isEmployer ? <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/UserDetail')}>View Full Profile</button> : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/UserProfileEdit')}>Edit</button>}
							
						</div>
						<div className="col-sm-6">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
							<p>Odio, labore cupiditate saepe molestias est veniam nostrum distinctio in praesentium totam expedita, quisquam odit officia amet. At quasi ex accusamus fuga!</p>
							
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
						</div>
            		</div>
        		</div>
			</div>
		</div>
	</div>
    
        
        
    );
  }
}

export default UserSnapshot;
