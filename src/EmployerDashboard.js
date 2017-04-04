import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import EmployerSnapshot from './EmployerSnapshot'

class EmployerDashboard extends Component {
  render() {
    return (
      <div>
        <EmployerSnapshot/>
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2">
				<h2 className="text-center">Job Postings</h2>
				<div className="panel panel-default">
            		<div className="panel-body">
						<h3>Job Title</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi voluptates in accusantium dolorum fuga. Dignissimos eius, praesentium consequatur, neque exercitationem sequi! Omnis sit consequuntur, ipsam nisi cupiditate possimus reiciendis?</p>
						<button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobmatches')}>View 3 matches</button>
					</div>
				</div>
				<div className="panel panel-default">
            		<div className="panel-body">
						<h3>Job Title</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi voluptates in accusantium dolorum fuga. Dignissimos eius, praesentium consequatur, neque exercitationem sequi! Omnis sit consequuntur, ipsam nisi cupiditate possimus reiciendis?</p>
						<button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobmatches')}>View 3 matches</button>
					</div>
				</div>
				<div className="panel panel-default">
            		<div className="panel-body">
						<h3>Job Title</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nisi voluptates in accusantium dolorum fuga. Dignissimos eius, praesentium consequatur, neque exercitationem sequi! Omnis sit consequuntur, ipsam nisi cupiditate possimus reiciendis?</p>
						<button type="button" className="btn btn-default text-center" onClick={() => browserHistory.push('/jobmatches')}>View 3 matches</button>
					</div>
				</div>
			</div>
        </div>
    </div>
    );
  }
}

export default EmployerDashboard;
