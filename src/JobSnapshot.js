import React, { Component } from 'react';
import { browserHistory } from 'react-router'

class JobSnapshot extends Component {

	

  render() {
    return (
            <div>
        		<div className="panel panel-default">
            		<div className="panel-body">
						<h3>Job Title</h3>
						<h4>Company Name</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi voluptates in accusantium dolorum fuga. Dignissimos eius, praesentium consequatur, neque exercitationem sequi! Omnis sit consequuntur, ipsam nisi cupiditate possimus reiciendis?</p>
						<button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobdetail')}>View job details</button>
						<button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/AddJob')}>Edit</button>
					</div>
				</div>
			</div>
    );
  }
}

export default JobSnapshot;
