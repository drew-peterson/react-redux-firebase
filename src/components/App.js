import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './Posts';
import Header from './Header';
import PublicPosts from './PublicPosts';
import Login from './auth/Login';
import Signup from './auth/Signup';
import requireAuth from './auth/requireAuth';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Header />
					<Route exact path="/login" component={Login} />
					<Route exact path="/Signup" component={Signup} />
					<Route exact path="/posts" component={requireAuth(Posts)} />
					<Route exact path="/" component={PublicPosts} />
				</div>
			</Router>
		);
	}
}

export default App;
