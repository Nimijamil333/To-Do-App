
function additem(){
    var add = document.getElementById("todo-item")
    var li = document.createElement('li')
    var text = document.createTextNode(add.value);
    li.appendChild(text)
    var dltbtn = document.createElement("button")
    var dlttext = document.createTextNode("DEL")
        //dltbtn.setAttribute("id","del")
    dltbtn.appendChild(dlttext)
    li.appendChild(dltbtn)
    list.appendChild(li)
    dltbtn.setAttribute("onClick","deleteitem(this)")
    dltbtn.setAttribute("class","delbtn button btn-group btn btn-info")
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)
    list.appendChild(li)
    editbtn.setAttribute("onClick","edititem(this)")
    editbtn.setAttribute("class","button btn-group btn btn-info")
    add.value = ""
    console.log(list) 
}
function deleteitem(e){
e.parentNode.remove();
}
function delall(){
list.innerHTML="";
}
function edititem(e){
    var editvalue = prompt("edit you todo : ",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editvalue;
    }

