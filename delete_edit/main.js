var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
var inputDescr=document.createElement('input');
var sbmit=document.getElementsByClassName('btn btn-dark');
// console.log(items)
inputDescr.setAttribute('type','text');
inputDescr.className='form-control mr-2';
inputDescr.setAttribute('id','descr');
// console.log(form);
form.insertBefore(inputDescr,sbmit[0]);
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault();
    newItem=document.getElementById('item').value;
    newDesc=document.getElementById('descr').value;
    li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    // li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(newDesc));
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-danger btn-sm float-right delete';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}
function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var itemDesc=item.childNodes[1].textContent;
        console.log(itemDesc);
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemDesc.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}
