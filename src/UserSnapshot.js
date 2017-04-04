import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class UserSnapshot extends Component {
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
    </div>
        
        
    );
  }
}

export default UserSnapshot;
