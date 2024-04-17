const heading=document.querySelector('#basket-heading');
heading.style.color='brown';

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';

fruits.style.listStyleType='none';

const list=document.querySelectorAll('.fruit');
for(let i=0;i<list.length;i++)
{
    list[i].style.backgroundColor='white';
    list[i].style.padding='10px';
    list[i].style.margin='10px';
    list[i].style.borderRadius='5px';
}

const list2=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<list2.length;i++)
{
    list2[i].style.backgroundColor='brown';
    list2[i].style.color='white'; 
}