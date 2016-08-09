$(document).ready(function (){
  
  
  //menu animacja
  
  var menuElements = $(".menu").find("li");
  
  menuElements.on('mouseenter', function(){ 
  $(this).css("background-color", "#532B13");
  $(this).css("color", "white");  
  });
  
  menuElements.on('mouseleave', function(){ 
  $(this).css("background-color", "white");
  $(this).css("color", "#532B13");  
  });
  
  
  // zdjecia animacja
  
 var box = $(".main_box").find("nav").find(".box");
  
  box.on('mouseenter', function(){ 
   $(this).css("background-size", "130% 180%");
  $(this).find(".box_border").css("opacity", "1");
  });
  
  box.on('mouseleave', function(){ 
   $(this).css("background-size", "110% 160%");
  $(this).find(".box_border").css("opacity", "0.6");
  });
  
  
    // zdjecia boxow z tekstem
  
var box_fest = $(".right_top");
  
  box_fest.on('mouseenter', function(){ 
  $(this).find(".box_border").addClass("box_borderFest");
   }); 
  
  box_fest.on('mouseleave', function(){ 
  $(this).find(".box_border").removeClass("box_borderFest"); 
   }); 
  
 var box_slajd = $(".right_bottom");
  
  box_slajd.on('mouseenter', function(){ 
  $(this).find(".box_border").addClass("box_borderSlajd");
   }); 
  
  box_slajd.on('mouseleave', function(){ 
  $(this).find(".box_border").removeClass("box_borderSlajd"); 
   });  
  
});


