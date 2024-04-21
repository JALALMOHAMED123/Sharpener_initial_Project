const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const fruitToAdd=document.getElementById('fruit-to-add').value;
  const element=document.createElement('li');
  const desc=document.getElementById('description').value;
  
  element.innerHTML=fruitToAdd+'<p class="describe"><em>'+desc+'</em></p>'+'<button class="delete-btn">x</button>';
  element.className='fruit';
  
  fruits.appendChild(element);
});

// 

// Show the fruit description in italics on the next line


// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter=document.getElementById('filter');

filter.addEventListener('keyup', function(event){
    const text=event.target.value.toLowerCase();
    const fruits_Items=document.getElementsByClassName('fruit');
    const fruit_des=document.getElementsByClassName('describe');
    for(let i=0;i<fruits_Items.length;i++)
    {
        const fruitName = fruits_Items[i].textContent.toLowerCase();
        const fruitDesc = fruits_Items[i].querySelector('.describe').textContent.toLowerCase();
        if (fruitName.includes(text) || fruitDesc.includes(text)) {
            fruits_Items[i].style.display = 'flex';
        } else {
            fruits_Items[i].style.display = 'none';
        }
    }
});
