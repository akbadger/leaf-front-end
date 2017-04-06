import React, { Component } from 'react';

class EmployerSignup extends Component {

	constructor(props) {
        super(props)
        this.signup = this.signup.bind(this)
        this.state = {
          companyName: '',
          contactName: '',
          contactPhone: '',
          about: '',
		  password: ''
        }
    }

	signup() {
		fetch('https://salty-thicket-32148.herokuapp.com/api/employers/' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
            user: {
                company_name: this.state.companyName,
                contact_name: this.state.contactName,
                contact_phone: this.state.contactPhone,
                about: this.state.about,
                password: this.state.password,
            }
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.employer.token) {
                // Saves any string into a named spot within your browser for the current domain.
                sessionStorage.setItem('employer', JSON.stringify(response));
                location.href = './employerdashboard';
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
				<div className="col-sm-6 col-sm-offset-3 ">
					<h3>Basic Information</h3>
				
						<div className="form-group">
							<label htmlFor="name">Company Name</label>
							<input type="text" className="form-control" id="company_name" placeholder="" onChange={(e) => this.setState({companyName: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="conactName">Contact Name</label>
							<input type="text" className="form-control" id="contact_name" placeholder=""onChange={(e) => this.setState({contactName: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="contactPhone">Phone</label>
							<input type="text" className="form-control" id="contact_phone" placeholder="" onChange={(e) => this.setState({contactPhone: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="about">About</label>
							<textarea className="form-control" id="password" placeholder="" onChange={(e) => this.setState({about: e.target.value})}/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Create a Password</label>
							<input type="password" className="form-control" id="password" placeholder="" onChange={(e) => this.setState({password: e.target.value})}/>
						</div>
						

						<button type="submit" className="btn btn-default" onClick={this.signup}>Submit</button>
			</div>
		</div>
    </div>
    );
  }
}

export default EmployerSignup;
