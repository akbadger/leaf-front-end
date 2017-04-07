import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import UserSnapshot from './UserSnapshot'
import EmployerSnapshot from './EmployerSnapshot'


class UserDetail extends Component {
  render() {
    return (
    <div>
        {this.props.isUser ? <UserSnapshot isEmployer={false}/> : <EmployerSnapshot isEmployer={true}/> }
        
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
            {/*{window.user.role === 'employer' ? <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/employerdashboard')}>Back to Jobs</button> : <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/userdashboard')}>Back to Dashboard</button>}*/}
            <br/><br/>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <img src="/img/greensquare.png" alt="profile"/>
						<h3>Job Title</h3>
						<h4 onClick={() => browserHistory.push('/employerview')}>Company Name</h4>
                        <h4>Contact Person Name</h4>
                        <p>Contact Information</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem, amet voluptatibus quam, quos dolores pariatur ea tempore corporis, rerum enim, laboriosam numquam! Magni, sed odit vel cumque natus, laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere magnam porro sit nostrum expedita tempora dolor? Alias eligendi hic optio, nam consectetur repudiandae nihil, accusantium placeat totam magni vero dignissimos!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem, amet voluptatibus quam, quos dolores pariatur ea tempore corporis, rerum enim, laboriosam numquam! Magni, sed odit vel cumque natus, laborum.</p>
                        {this.props.isUser ? <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/employerdetail')}>View Full Profile</button> : ''}
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    );
  }
}

export default UserDetail;
