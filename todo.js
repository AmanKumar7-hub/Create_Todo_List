//close delete button for an item from the list
var myNodeList = document.getElementsByTagName("li");
var i;
//loop for each item in list
for (i=0;i<myNodeList.length;i++){
  var span= document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7")
  span.className= "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

//function to add new element to the list
function newElement(){
  var li = document.createElement("li");
  var input_value = document.getElementById("myinput").value;
  var t = document.createTextNode(input_value);
  li.appendChild(t);
  console.log(li);
  if(input_value === '' || input_value===' '){
    alert('Please write something.');
  }
  else{
    document.getElementById("myul").appendChild(li);
  }
  document.getElementById("myinput").value="";
  var span  = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7")
  span.className= "close";
  span.appendChild(txt);
  li.appendChild(span);

  for(i=0;i<close.length;i++){
    close[i].onclick=function(){
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//functionality for checkd item in list when click on the item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
  if(ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
},false)

// function for close button to hide the current list item
var close  = document.getElementsByClassName("close");
for(i=0;i<close.length;i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display="none";
  }
}

//Function for remove entire list item
function removeAll(){
  var lst = document.getElementsByTagName("ul");
  lst[0].innerHTML= '';
}
