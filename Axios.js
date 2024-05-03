const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/ab972572e41949c384819b7d69d676a0/todo")
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
}

function postTodo() {
  // Write your code here
  axios.post("https://crudcrud.com/api/ab972572e41949c384819b7d69d676a0/todo",{
    title: "Assignment", 
    completed: true
  }).then(res=>console.log(res))
    .catch(err=>console.log(err));
}

function putTodo() {
  // Write your code here
  axios.put("https://crudcrud.com/api/ab972572e41949c384819b7d69d676a0/todo/6633ce1412b33803e801709e",{
    title: "Assignment 2", 
    completed: false
  }).then(res=>console.log(res))
    .catch(err=>console.log(err));
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/ab972572e41949c384819b7d69d676a0/todo/6633ce1412b33803e801709e")
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
}
