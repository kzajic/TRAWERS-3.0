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
  
  //HOME PAGE
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
  
  
  // subpage W POLSKE! 
  //slidery
  
  //one
  
var height = $(window).height();
var width = $(window).width();
  
//slajdery
  
var index_one = 3;
var index_two = 0;
var index_three = 3;
  
//slider one  
  
var one = $('.slider_one')
var elements_one = one.find("li");
  
//klonowanie slider one
 
elements_one.eq(0).clone().appendTo(one.find("ul"));
elements_one.eq(elements_one.length-1).clone().prependTo(one.find("ul"));
  
  
function pos_one () {
    index_one = 3;
    one.find("ul").css("top", -height*3);
  }
pos_one();
  
//slider top
  
var two = $('.slider_top');
var elements_two = two.find(".item");  

 //klonowanie slider top
  
elements_two.eq(0).clone().appendTo(two.find(".slider_container"));
elements_two.eq(elements_two.length-1).clone().prependTo(two.find(".slider_container"));  
  
function pos_top () {
  index_two = 0;
  two.find(".slider_container").css("left", 0);
}
  pos_top();
  
//slider buttom
  
var three = $('.slider_buttom');
var elements_three = three.find(".item"); 
  
 //klonowanie slider buttom

elements_three.eq(0).clone().appendTo(three.find(".slider_container"));
elements_three.eq(elements_three.length-1).clone().prependTo(three.find(".slider_container"));
  
//pozycja
  
if (window.matchMedia('(max-width: 760px)').matches) {
  function pos_buttom () {
  index_three = 3
  three.find(".slider_container").css("left", -((width)*3));
}
pos_buttom();

  
} else {
  function pos_buttom () {
  index_three = 3
  three.find(".slider_container").css("left", -((width/2)*3));
}
pos_buttom();

}
  
function scroll () {
  
  index_one -= 1
  index_two += 1
  index_three -=1
  
  one.find("ul").animate({
        "top": -(index_one * height)
          },2000, function (){
          if (index_one < 1)
          pos_one();
  });

  
if (window.matchMedia('(max-width: 760px)').matches) {

  
  two.find(".slider_container").animate({
    "left": -((width)*index_two)
      }, 2000, function (){
      if (index_two > elements_two.length-1)
      pos_top();
      });
  
  three.find(".slider_container").animate({
      "left": -(width)*index_three
      },2000, function (){
      if (index_three < 1)
     pos_buttom();
    });
  
  } else {
    
    
    two.find(".slider_container").animate({
      "left": -((width/2)*index_two)
      }, 2000, function (){
      if (index_two > elements_two.length-1)
      pos_top();
      });
    
    three.find(".slider_container").animate({
      "left": -((width/2)*index_three)
      },2000, function (){
      if (index_three < 1)
     pos_buttom();
    });
    
  }
  
  };
  
  
   var value = 0
$('.rotate').find("img").rotate({
  bind:
  {
    click: function(){
            value -=300;
      console.log(value);
            $(this).rotate({ animateTo:value})
            scroll();
        }
    }
});
  
  
var readButton = $(".art_link");
  
  readButton.on('mouseenter', function(){ 
  $(this).css("background-color", "#4A2D25");
  $(this).css("color", "white");  
  });
  
  readButton.on('mouseleave', function(){ 
  $(this).css("background-color", "white");
  $(this).css("color", "#4A2D25");  
  });
  
  
  
//subpage festiwal 
  
  
 


//subpage gazeta


var section = $(".transparent");
  
  section.on('mouseenter', function(){ 
   $(this).removeClass("transparent");
  });
  
  section.on('mouseleave', function(){ 
   $(this).addClass("transparent");
  });
             
});