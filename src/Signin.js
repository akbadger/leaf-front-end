import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class Signin extends Component {
        
  render() {
    return (
    <div>
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder=""/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.signin}>Submit</button>
                </div>
            </div>
        </div>
        
        
    );
  }
}

export default Signin;
