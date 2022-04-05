// -CRUD
//     - Create: tạo mới -> post
//     - Read: lấy dữ liệu -> get
//     - Update: chỉnh sửa -> Put/PATCH 
//     - DELETE: xóa -> DELETE



var courseApi = '';


function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

// Function
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function CreateCourse(data, callback) {
    var options = {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options) 
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function hendleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        Headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi + '/' + id, options) 
        .then(function(response) {
            response.json();
        })
        .then(function() {
            getCourses(renderCourses);
        });
}

function renderCourses () {
    var listCourséBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return '
            <li data-id="${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">xóa</button>
            </li>
        ';
    });
    listCoursesBlock.innerHTML =htmls.join('');
}

function handleCreateForm() {
    var CreateBtn = document.querySelector('#create')

    CreateBtn.onclick = function () {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value

        var formData = {
            name: name,
            description: description
        };

        CreateCourse(formData, function() {
            getCourses(renderCourses);
        });
    }
}
