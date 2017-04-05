import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class Signin extends Component {
  render() {
    return (
    <div>
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={() => browserHistory.push('/UserDashboard')}>Submit</button>
                </div>
            </div>
        </div>
        
        
    );
  }
}

export default Signin;
