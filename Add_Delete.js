const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const fruitToAdd=document.getElementById('fruit-to-add');
  const element=document.createElement('li');
  element.innerHTML=fruitToAdd.value+'<button class="delete-btn">x</button>+<button class="edit-btn">Edit</button>';
  element.className='fruit';
  fruits.appendChild(element);
});

fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const removelist=event.target.parentElement;
        fruits.removeChild(removelist);
    } 
})

fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('edit-btn')){
    } 
})