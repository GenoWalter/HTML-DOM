// API (URL) -> Application programing interface

// cổng giao tiếp giữa các PM

// Backend -> API -> Fetch -> JSON/XML -> JSON.parse -> JavaScript types 
// -> Render ra giao diện với HTML 

var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
    .then(function(response) {
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })
    .then(function(posts){
        var htmls = posts.map(function(post) {
            return '<li>
            <h2>${post.title}</h2>
            <hp>${post.body}</p>
            </li>';
        });

        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err) {
        alert('CÓ lỗi!')
    });