
function create(){
   
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'title',
            body: 'body',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then(function (json){
        document.getElementById('pre_info').textContent = JSON.stringify(json, undefined, 2);
        console.log(json) 
    } );
}


function read(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then(function (json){
        document.getElementById('pre_info').textContent = JSON.stringify(json, undefined, 2);
        console.log(json) 
    } 
    );
}

function update(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'titleUpdate',
          body: 'bodyUpdate',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then(function (json){
        document.getElementById('pre_info').textContent = JSON.stringify(json, undefined, 2);
        console.log(json) 
    });
}

function remove(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    }) 
    .then(function (json){
        document.getElementById('pre_info').textContent = "Deleted id 1";
        console.log(json) 
    });   
}

