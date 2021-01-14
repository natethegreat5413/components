import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>Are you sure you want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					timeAgo="Today at 5:45PM"
					author="nate"
					comments="passing as props 1"
					profilePic={faker.image.image()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					timeAgo="Today at 6:00AM"
					author="joe"
					comments="passing as props 2"
					profilePic={faker.image.image()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					timeAgo="Today at 8:45PM"
					author="Fred"
					comments="passing as props 3"
					profilePic={faker.image.image()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
