import React, { Component } from 'react';
import { browserHistory } from 'react-router'


class Nav extends Component {
  render() {
    return (
    <nav>
        <div className="container">
                    <div className="row nav">
                        <div className="col-sm-6 text-left nav-left">
                            <a href="#" onClick={() => browserHistory.push('/')}>Leaf</a>
                            <a href="#" onClick={() => browserHistory.push('/signin')} >Sign In</a>
                        </div>
                        <div className="col-sm-6 text-right nav-right">
                            <a href="#">Another Link</a>
                            <a href="#">Perhaps Another</a>
                        </div>
                    </div>
                </div>
    </nav>
        
    );
  }
}

export default Nav;
