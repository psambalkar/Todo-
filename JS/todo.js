var typed = new Typed('.element', {
    strings: ["To Do list", "Enter the work you need to do."],
    typeSpeed: 30
  });

var add=document.getElementById("add");
var remove=document.getElementById("remove");
var list=document.getElementById("list");
//remove all btn
remove.onclick=function(){
    list.innerHTML="";
}
add.onclick=function(){
    addlis(list);
    document.getElementById('userinput').value="";
    document.getElementById('userinput').focus();
}
function addlis(targetUl){
    var inputtext=document.getElementById("userinput").value
    var li=document.createElement("li");
    var textnode=document.createTextNode(inputtext+" ");
    var removebutton=document.createElement("button");
    if(inputtext!==''){
        removebutton.className="btn btn-xs btn-danger";
        removebutton.innerHTML="&times;";
        removebutton.setAttribute("onclick","removeMe(this)");
         li.appendChild(textnode);
         li.appendChild(removebutton);
         targetUl.appendChild(li);
    }else{
        alert("please enter a todo ");
    }
    
    
}
function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}