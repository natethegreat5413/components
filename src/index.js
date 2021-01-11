import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail author="nate" />
			<CommentDetail author="joe" />
			<CommentDetail author="Fred" />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
