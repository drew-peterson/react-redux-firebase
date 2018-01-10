import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {
	logout() {
		this.props.authLogout();
	}
	renderLinks() {
		const { user } = this.props;

		if (user) {
			return [
				<li key="0">{user.email}</li>,
				<li key="1">
					<Link to="/posts">Posts</Link>
				</li>,
				<li key="4">
					<Link to="/" onClick={this.logout.bind(this)}>
						Logout
					</Link>
				</li>
			];
		}

		return [
			<li key="2">
				<Link to="/login">Login</Link>
			</li>,
			<li key="3">
				<Link to="/signup">Signup</Link>
			</li>
		];
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link className="brand-logo left" to="/">
						Logo
					</Link>

					<ul id="nav-mobile" className="right">
						{this.renderLinks()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.auth
	};
}
export default connect(mapStateToProps, actions)(Header);
