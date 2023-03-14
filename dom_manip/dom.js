// console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');

// headerTitle.textContent='Hello';
// headerTitle.innerHTML=<h3>Hello</h3>;
header.style.borderBottom='solid 3px #000';
console.log(document.getElementsByClassName('title'));
var newTitle=document.getElementsByClassName('title');
newTitle[0].style.fontWeight='bold';
newTitle[0].style.color='green';