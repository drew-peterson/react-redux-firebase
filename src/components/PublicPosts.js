import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicPosts } from '../actions';
import _ from 'lodash';
import moment from 'moment';

class PublicPosts extends Component {
	componentDidMount() {
		const { fetchPublicPosts } = this.props;
		fetchPublicPosts();
	}

	renderPublicPosts() {
		const { posts } = this.props;
		return _.map(posts, (post, key) => {
			const time = moment(post.createdAt).format('l, LT');
			return (
				<li className="collection-item row" key={key}>
					<span className="col s5">{post.body}</span>
					<span className="col s3">{post.email}</span>
					<span className="col s4">{time}</span>
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="collection with-header">
				<li className="collection-header">
					<h4>Public Posts</h4>
				</li>
				{this.renderPublicPosts()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.publicPosts
	};
}

export default connect(mapStateToProps, { fetchPublicPosts })(PublicPosts);
