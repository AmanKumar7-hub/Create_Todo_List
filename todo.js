//creating a close delete button for an item from the list
var myNodeList = document.getElementsByTagName("li");
console.log(myNodeList);
var i;
//loop for each item in list
for (i=0;i<myNodeList.length;i++){
  var span= document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7")
  span.className= "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}
