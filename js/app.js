$(document).ready(function (){
  
  
  var menuElements = $(".menu").find("li");
  
  menuElements.on('mouseenter', function(){ 
  $(this).css("background-color", "#532B13");
  $(this).css("color", "white");  
  });
  
  menuElements.on('mouseleave', function(){ 
  $(this).css("background-color", "white");
  $(this).css("color", "#532B13");  
  });
  
});