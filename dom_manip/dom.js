// console.log(document.getElementById('header-title'));
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');

// // headerTitle.textContent='Hello';
// // headerTitle.innerHTML=<h3>Hello</h3>;
// header.style.borderBottom='solid 3px #000';
// console.log(document.getElementsByClassName('title'));
// var newTitle=document.getElementsByClassName('title');
// newTitle[0].style.fontWeight='bold';
// newTitle[0].style.color='green';
// var items=document.getElementsByClassName('list-group-item');
// items[1].textContent='Hello 2';
// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

// header.style.borderBottom='solid 3px #000';
// console.log(document.getElementsByClassName('title'));
// var newTitle=document.getElementsByClassName('title');
// newTitle[0].style.fontWeight='bold';
// newTitle[0].style.color='green';
// var li=document.getElementsByTagName('li');
// li[1].textContent='Hello 2';
// li[2].style.backgroundColor='green';
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';
var item=document.querySelector('.list-group-item');
item.style.color='red';
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';
var listMain=document.querySelectorAll('.list-group-item');
listMain[1].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i=i+2){
    odd[i].style.backgroundColor='green';
}

