import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions';
import { withRouter } from 'react-router-dom';

export default function(ComposedComponent) {
	class Authentication extends Component {
		componentWillMount() {
			const { user, history, checkAuth } = this.props;
			if (!user) {
				checkAuth(history); // need to check firebase auth which will auth and re render
			}
		}

		// while on component and reRender -- on click signup run this function
		// nextprops is the updatedProps comming in basically this.props
		componentWillUpdate({ user, history }) {
			if (!user) {
				history.push('/');
			}
		}

		render() {
			// prevent composed compnent from rendering if no user....
			const { user } = this.props;
			return user && <ComposedComponent {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return { user: state.auth };
	}
	return withRouter(connect(mapStateToProps, { checkAuth })(Authentication));
}
