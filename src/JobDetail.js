import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class UserDetail extends Component {
  render() {
    return (
    <div>
        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
				<div className="panel panel-default">
            		<div className="panel-body">
						<div className="col-sm-6">
							<img src="http://unsplash.it/400/?image=random"/>
							<h4>Name or Username?</h4>
							<p>more snapshot info</p>
							<button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/UserProfileEdit')}>Edit</button>

						</div>
						<div className="col-sm-6">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
							<p>Odio, labore cupiditate saepe molestias est veniam nostrum distinctio in praesentium totam expedita, quisquam odit officia amet. At quasi ex accusamus fuga!</p>
						</div>
            		</div>
        		</div>
			</div>
        </div>

        <div className="row">
			<div className="col-sm-8 col-sm-offset-2">
            <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/userdashboard')}>Back to Dashboard</button>
            <br/><br/>
				<div className="panel panel-default">
            		<div className="panel-body">
                        <img src="http://unsplash.it/400/?image=random"/>
						<h3>Job Title</h3>
						<h4 onClick={() => browserHistory.push('/employerview')}>Company Name</h4>
                        <h4>Contact Person Name</h4>
                        <p>Contact Information</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem, amet voluptatibus quam, quos dolores pariatur ea tempore corporis, rerum enim, laboriosam numquam! Magni, sed odit vel cumque natus, laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere magnam porro sit nostrum expedita tempora dolor? Alias eligendi hic optio, nam consectetur repudiandae nihil, accusantium placeat totam magni vero dignissimos!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem, amet voluptatibus quam, quos dolores pariatur ea tempore corporis, rerum enim, laboriosam numquam! Magni, sed odit vel cumque natus, laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem, amet voluptatibus quam, quos dolores pariatur ea tempore corporis, rerum enim, laboriosam numquam! Magni, sed odit vel cumque natus, laborum.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        
    );
  }
}

export default UserDetail;
