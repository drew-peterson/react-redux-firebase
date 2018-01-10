import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './Post_item';
import _ from 'lodash';
import * as actions from '../actions';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newPost: ''
		};
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.props.createPost(this.state.newPost);
		this.setState({ newPost: '' });
	}

	handleInputChange(event) {
		this.setState({ newPost: event.target.value });
	}

	renderList() {
		const { posts, deletePost } = this.props;

		if (!_.isEmpty(posts)) {
			return _.map(posts, (post, key) => (
				<PostItem post={post} key={key} delete={deletePost} id={key} />
			));
		}
		return <h3>NO POSTS...</h3>;
	}
	newPostForm() {
		return (
			<form onSubmit={this.handleFormSubmit.bind(this)}>
				<input
					type="text"
					value={this.state.newPost}
					onChange={this.handleInputChange.bind(this)}
					style={{ maxWidth: '40%' }}
					placeholder="New Post"
				/>
				<button
					className="btn btn-flat green white-text"
					type="submit"
					style={{ marginLeft: '15px' }}
				>
					Create
				</button>
			</form>
		);
	}
	render() {
		return (
			<div>
				{this.newPostForm()}
				<ul className="collection">{this.renderList()}</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.userPosts };
}
export default connect(mapStateToProps, actions)(Posts);
