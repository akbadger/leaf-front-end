import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class JobMatches extends Component {
  render() {
    return (
        <div>
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="col-sm-6">
                                <img src="http://unsplash.it/400/?image=random"/>
                                <h4>Company Name</h4>
                                <p>more snapshot info, probably contact person info</p>
                                <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/EmployerProfileEdit')}>Edit</button>

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
				<h2 className="text-center">User Matches</h2>
				<div className="panel panel-default">
            		<div className="panel-body">
						<h3>Job Title</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi voluptates in accusantium dolorum fuga. Dignissimos eius, praesentium consequatur, neque exercitationem sequi! Omnis sit consequuntur, ipsam nisi cupiditate possimus reiciendis?</p>
                    </div>
                </div>
                <div className="panel panel-default">
            		<div className="panel-body">
                        <img src="http://unsplash.it/400/?image=random"/>
						<h3>User Name</h3>
						<p>Snapshot of User Info</p>
                        <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/userdetail')}>View Full Profile</button>
                    </div>
                </div>
                <div className="panel panel-default">
            		<div className="panel-body">
                        <img src="http://unsplash.it/400/?image=random"/>
						<h3>User Name</h3>
						<p>Snapshot of User Info</p>
                        <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/userdetail')}>View Full Profile</button>
                    </div>
                </div>
                <div className="panel panel-default">
            		<div className="panel-body">
                        <img src="http://unsplash.it/400/?image=random"/>
						<h3>User Name</h3>
						<p>Snapshot of User Info</p>
                        <button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/userdetail')}>View Full Profile</button>
                    </div>
                </div>
						
					</div>
                </div>
            </div>
        
        
    );
  }
}

export default JobMatches;
