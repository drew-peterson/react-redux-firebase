import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router';
import AuthForm from './AuthForm';

class Login extends Component {
	submit(values) {
		const { authLogin, history } = this.props;
		authLogin(values, history);
	}

	render() {
		return (
			<div>
				<h2>Login</h2>
				<AuthForm onSubmit={this.submit.bind(this)} />
			</div>
		);
	}
}

export default withRouter(connect(null, actions)(Login));
