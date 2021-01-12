import React from 'react';

const CommentDetail = ({ author, timeAgo, comments, profilePic }) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={profilePic} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{author}
				</a>
				<div className="metadata">
					<span className="date">{timeAgo}</span>
				</div>
				<div className="text">{comments}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
