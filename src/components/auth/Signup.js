import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router';
import AuthForm from './AuthForm';

class Signup extends Component {
	submit(values) {
		const { authSignup, history } = this.props;
		authSignup(values, history);
	}

	render() {
		return (
			<div>
				<h2>Signup</h2>
				<AuthForm onSubmit={this.submit.bind(this)} />
			</div>
		);
	}
}

export default withRouter(connect(null, actions)(Signup));
