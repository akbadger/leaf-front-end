import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class Signin extends Component {
  render() {
    return (
    <div>
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
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
