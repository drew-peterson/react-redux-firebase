import React from 'react';
import moment from 'moment';

const PostItem = props => {
	const { post, id } = props;
	const handleClick = () => {
		props.delete(id);
	};
	const time = moment(post.createdAt).format('l, LT');
	return (
		<li className="collection-item row valign-wrapper">
			<span className="col s7">{post.body}</span>
			<span className="col s4">{time}</span>
			<button
				className="btn btn-flat col center-align red col"
				onClick={handleClick}
			>
				<i className="material-icons white-text">delete</i>
			</button>
		</li>
	);
};

export default PostItem;
