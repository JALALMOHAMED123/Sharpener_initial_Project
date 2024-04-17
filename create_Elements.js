const para=document.createElement('h3');
const paraText=document.createTextNode('Buy high quality organic fruits online');

para.appendChild(paraText);
para.style.fontStyle='italic';

const divs=document.getElementsByTagName('div');
const first=divs[0];
const second=divs[1];

first.appendChild(para);

const para2=document.createElement('p');
const paraText2=document.createTextNode('Total fruits: 4');

para2.appendChild(paraText2);
para2.id='fruits-total';

second.appendChild(para2);

const fruits=document.querySelector('.fruits');
second.insertBefore(para2,fruits);
