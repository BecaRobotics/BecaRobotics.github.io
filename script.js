//Event listener onclick :when you click the menu symbol
 function openfunction(){
    document.getElementById("menu").style.width="250px";
    document.getElementById("mainbox").style.marginleft="250px";
    document.getElementById("mainbox").innerHTML="";
  }
  // Event listener onclick: when you click close symbol
  function closefunction(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginleft="0px";
    document.getElementById("mainbox").innerHTML="&#9776;  ";
  }

// Event listner when you hover over image
function changePicture(pictureNumber){
  
  var image = document.getElementById("myImage");
  if(pictureNumber === 1){
    image.src = "https://ih1.redbubble.net/image.810589271.6580/flat,750x,075,f-pad,750x1000,f8f8f8.u9.jpg"
  }else{
    image.src = "https://assets.change.org/photos/5/ji/uy/NkJiuYEGGScVeBi-800x450-noPad.jpg?1590689285"
  }

}