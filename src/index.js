import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App';
import Home from './Home'
import UserSignup from './UserSignup'
import EmployerSignup from './EmployerSignup'
import Signin from './Signin'
import UserDashboard from './UserDashboard'
import UserProfileEdit from './UserProfileEdit'
import EmployerDashboard from './EmployerDashboard'
import EmployerProfileEdit from './EmployerProfileEdit'
import JobMatches from './JobMatches'
import UserDetail from './UserDetail'
import './index.css';



ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
		<Route path="/signin" component={Signin} />
		<Route path="/usersignup" component={UserSignup} />
		<Route path="/employersignup" component={EmployerSignup} />
        <Route path="/userdashboard" component={UserDashboard} />
        <Route path="/userprofileedit" component={UserProfileEdit} />
        <Route path="/employerdashboard" component={EmployerDashboard} />
        <Route path="/employerprofileedit" component={EmployerProfileEdit} />
        <Route path="/jobmatches" component={JobMatches} />
        <Route path="/userdetail" component={UserDetail} />

      </Route>
 </Router>,
  document.getElementById('root')
);
