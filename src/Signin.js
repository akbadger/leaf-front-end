import React, { Component } from 'react';

class Signin extends Component {
    constructor(props) {
        super(props)
        this.signin = this.signin.bind(this)
            this.state = {
                username: '',
                password: ''
            }
    }

    signin() {
		fetch(window.apiHost + '/login' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
            user: {
                username: this.state.username,
                password: this.state.password
            }
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.user.token) {
                // Saves any string into a named spot within your browser for the current domain.
                sessionStorage.setItem('user', JSON.stringify(response));
                // browserHistory.push(response.user.role === 'user' ? '/userdashboard' : '/employerdashboard');
                location.href = '/dashboard';
            }
            else {
                alert('There was an error. Check out your console.');
                console.log(response);
            }
        })
	}

  render() {
    return (
    <div>
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="" onChange={(e) => this.setState({username: e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="" onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.signin}>Submit</button>
                </div>
            </div>
        </div>
        
        
    );
  }
}

export default Signin;
