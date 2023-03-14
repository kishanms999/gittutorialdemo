var itemList=document.querySelector('#items');
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.firstChild);
itemList.firstElementChild.textContent='Hello 1';
console.log(itemList.lastChild);
itemList.lastElementChild.textContent='Hello 4';
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1);
// var listFirst=document.querySelector('header .list-group-item');
// console.log(listFirst);
var parentNode=document.getElementById('items');
// var newLi=document.createElement('li');
// newLi.createTextNode('Hello World');
parentNode.innerHTML='<li>Hello World</li>'+parentNode.innerHTML
//listFirst.insertBefore(newDiv,itemList);

