

var users = [
	{
		id: 1,
		name: 'Kien Dam',
	},
	{
		id: 2,
		name: 'Thai Trinh',
	},
	{
		id: 3,
		name: 'Hung Dang',
	},
]

var comments = [
	{
		id: 1,
		user_id: 1,
		content: 'Anh chua ra video '
	},
	{
		id: 2,
		user_id: 2,
		content: 'Anh sap ra roi'
	},

]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 3. từ user_id lấy ra user tương ứng 

// fake API 

function getComments() {
	return new Promise( function(resolve) {
		setTimeout(function() {
			resolve(comments)
		}, 1000)	 
	});
}

function getUsersByIds(userids) {
	return new Promise(function(resolve) {
		var result = users.filter(function(user){
			return userIds.includes(user.id)
		});
		setTimeout(function() {
			resolve(result);
		}, 1000);
	});
}


getComment()
	.then(function(comments){
		var userIds = comments.map(function(comment) {
			return comments.user_id;
		});

		return getUsersByIds(user_id)
		.then(function(users) {
			return {
				users: users,
				comments: comments,
			};
		});	
	})
	.then(function(users){
		
		var commentBlock = document.getElementById('comment-block');
		
		var html = '';
		data.comments.forEach(function(comment){
			var user = data.users.find(function(user){
				return user.id === comment.user_id;
			});
			html += '${user.name}: ${comment.content}';
		});
		
		commentBlock.innerHTML = html;
	});

