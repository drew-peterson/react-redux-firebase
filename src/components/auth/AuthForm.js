import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AuthForm extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<Field name="email" component="input" type="email" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<Field name="password" component="input" type="password" />
				</div>
				<button className="btn" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'authForm'
})(AuthForm);
