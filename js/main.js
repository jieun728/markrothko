$(window).load(function(){

  lineAnimation()

  homeHeight()

  pointerChange()

  homeImages()

  menuNav()

  menuPosition()

  colorChange()

  showPainting()

  viewAllPainting()

  aboutSwiper()

  mapHover()

  var TextSlide1=new TextSlide("#article_title_wrap")
  var TextSlide2=new TextSlide("#painting_title_wrap")
  

//   +++남은작업

// textslide script speed
// pointerChange pointer isnt following
// menu position animate  먼저해결

// top bottom perspective
//가로 스크롤

})


//$(document).ready(function(){
 //   var  logo = document.querySelectorAll("#logo path");
 // logo.forEach(function(i){
   // console.log(i);
  //  i.style.strokeDasharray = i.getTotalLength()+"px";
 // });
//})

function lineAnimation(){
  $("path").css({"animation":"line 3s ease forwards"})
  $("#logo").css({"animation":"fill 0.4s ease forwards 2.9s"})
}


function homeHeight(){
  $("#full_banner").css({"height":$(window).innerHeight()})
}


function pointerChange(){ //스크롤할때 안따라옴
  var $mouse=$(".mouse")
  var scrollHeight=$(document).scrollTop()

  $(window).on("mousemove",moveMouse)
  $(window).on("scroll",scrollMouse)


  function moveMouse(e){
    $(".mouse:not(:animated)").animate({"left":e.pageX,"top":e.pageY},0.1,"easeInCubic")
  } 

  function scrollMouse(e){
    $(".mouse:not(:animated)").animate({"left":e.pageX,"top":e.pageY+(scrollHeight-$(document).scrollTop())},0.1,"easeInCubic")
  }


  $("#painting_list").on("mouseenter",changePosition)
  $("#painting_list").on("mouseleave",backPosition)

  function changePosition(){
    $mouse.hide()
    $(".mouse_click").show()
    $(window).on("mousemove",moveText)
  }

  function backPosition(){
    $mouse.show()
    $(".mouse_click").hide()
  }

  function moveText(e){
    $(".mouse_click:not(:animated)").animate({"left":e.pageX,"top":e.pageY},0.1,"easeInCubic")
  }

}



function homeImages(){

  var imgNum=$("#image_list").children().size()
  var $img=$("#image_list").children()
    
  var i=0; 
  var currentX;
  var currentY;
  var newX;
  var newY;

  // setInterval(showImg,10)     
  
  showImg()

  function showImg(e){

    $("#full_banner").on("mouseover",function(e){

      currentX=e.pageX
      currentY=e.pageY
    })

      
    $("#full_banner").on("mousemove",function(e){
        
      newX=e.pageX
      newY=e.pageY  

      if(Math.abs(newX-currentX)>100 || Math.abs(newY-currentY)>100){  

        $img.eq(i).css({"left":newX-($img.innerWidth()/2),"top":newY-($img.innerHeight()/2),"display":"block","opacity":1})
          
        $img.eq(i).stop();
        $img.eq(i).animate({"top":$(window).innerHeight(),"opacity":0},1000,"easeInExpo",function(){
          $(this).hide();
        })

        i++

        if(i>=imgNum){
          i=0; 
        }

        currentX=newX;
        currentY=newY;       
      }

    })

  }

  requestAnimationFrame(showImg)
  
}

function menuPosition(){
  var $menuLi=$("#mainmenu").children()

  $menuLi.eq(0).animate({"height":350},100,"easeOutCubic")

  $(window).on("scroll", onScroll)

  function onScroll(){
    var scrollHeight=$(document).scrollTop()

    if(scrollHeight<=$("#about").offset().top-$(window).innerHeight()/3){
      $menuLi.css({"height":40})
      $menuLi.eq(0).css({"height":350})
    }
    if(scrollHeight>$("#about").offset().top-$(window).innerHeight()/3){
      $menuLi.css({"height":40})
      $menuLi.eq(0).css({"height":70})
      $menuLi.eq(1).css({"height":320})
    }
    if(scrollHeight>$("#painting").offset().top-$(window).innerHeight()/3){
      $menuLi.css({"height":40})
      $menuLi.eq(0).css({"height":70})
      $menuLi.eq(2).css({"height":320})
    }
    if(scrollHeight>$("#article").offset().top-$(window).innerHeight()/3){
      $menuLi.css({"height":40})
      $menuLi.eq(0).css({"height":70})
      $menuLi.eq(3).css({"height":320})
    }
    if(scrollHeight>$("#where").offset().top-$(window).innerHeight()/3){
      $menuLi.css({"height":40})
      $menuLi.eq(0).css({"height":70})
      $menuLi.eq(4).css({"height":320})
    }
  }

}



function colorChange(){

  $(window).on("scroll", onScroll)

  function onScroll(){
    var scrollHeight=$(document).scrollTop()

    if(scrollHeight<$("#about").offset().top-$(window).innerHeight()/3){
      $("body").stop()
      $("body").animate({"background-color":"rgba(248,175,3,1)"},300,"easeOutCubic")

      $("#header").find("li").css({"color":"#D52104"})
      $("#header").find("span").css({"background":"#D52104"})
      $(".mouse_circle").css({"background":"black"})
    }
    if(scrollHeight>=$("#about").offset().top-$(window).innerHeight()/3 && scrollHeight<$("#painting").offset().top-$(window).innerHeight()/3){
      $("body").stop()
      $("body").animate({"background-color":"rgba(248,175,3,0)"},300,"easeOutCubic")
      $("body").stop()
      $("body").animate({"background-color":"rgba(56,54,59,1)"},300,"easeOutCubic")

      $("#header").find("li").css({"color":"#CDBFB2"})
      $("#header").find("span").css({"background":"#CDBFB2"})
      $(".mouse_circle").css({"background":"#CDBFB2"})

    }
    if(scrollHeight>=$("#painting").offset().top-$(window).innerHeight()/3 && scrollHeight<$("#article").offset().top-$(window).innerHeight()/3){
      $("body").stop()
      $("body").animate({"background-color":"rgba(56,54,59,0)"},300,"easeOutCubic")
      $("body").stop()
      $("body").animate({"background-color":"rgba(255,255,255,1)"},300,"easeOutCubic")

      $("#header").find("li").css({"color":"#072357"})
      $("#header").find("span").css({"background":"#072357"})
      $(".mouse_circle").css({"background":"#072357"})
    }
    if(scrollHeight>=$("#article").offset().top-$(window).innerHeight()/3 && scrollHeight<$("#where").offset().top-$(window).innerHeight()/3){
      $("body").stop()
      $("body").animate({"background-color":"rgba(255,255,255,0)"},300,"easeOutCubic")
      $("body").stop()
      $("body").animate({"background-color":"rgba(83,67,153,1)"},300,"easeOutCubic")

      $("#header").find("li").css({"color":"#DDB102"})
      $("#header").find("span").css({"background":"#DDB102"})
      $(".mouse_circle").css({"background":"#DDB102"})

    }
    if(scrollHeight>=$("#where").offset().top-$(window).innerHeight()/3 && scrollHeight<$("#where").offset().top-$(window).innerHeight()/3+100){
      $("body").stop()
      $("body").animate({"background-color":"rgba(83,67,153,0)"},300,"easeOutCubic")
      $("body").stop()
      $("body").animate({"background-color":"rgba(228,203,175,1)"},300,"easeOutCubic")

      $("#header").find("li").css({"color":"#DE432A"})
      $("#header").find("span").css({"background":"#DE432A"})
      $(".mouse_circle").css({"background":"#DE432A"})

    }
    
  }

}

function menuNav(){

  var $menu=$("#mainmenu").find("li")
  var windowHeight=$(window).innerHeight()
  var menuClickNum=0

  $menu.on("click",menuClick)

  function menuClick(){
    menuClickNum=$menu.index($(this))
    scrollContents(menuClickNum)
  }

  function scrollContents(selectNum){  
    $("body,html").stop()
    $("body,html").animate({"scroll-top":$("#main_wrap").children().eq(selectNum).offset().top},900,"easeOutCubic")
  }


}


// function paintingTitleSlide(){
  
//   var currentX=$(".painting_title").position().left
//   var stepX=-1
//   var textWidth=$(".painting_title").children().innerWidth()+parseInt($(".painting_title").children().css("margin-right"))

//   setInterval(slideStart,5)

//   function slideStart(){

//     currentX += stepX
//     $(".painting_title").css({"left":currentX})

//     if(parseInt($(".painting_title").css("left"))<-textWidth){

//       $(".painting_title").css({"left":0})

//       currentX=0

//       currentX += stepX
//       $(".painting_title").css({"left":currentX})
//     }


//   }
// }


// function textSlide(){
  
//   var $textUl=$(".painting_title")
//   var $textLi=$textUl.children()
//   var stepX=-0.5
//   var currentX=$textUl.position().left

//   var timer=setInterval(slideStart,5)

//   function slideStart(){

//     currentX += stepX
//     $(".painting_title").css({"left":currentX})

//     if(currentX<=-$textLi.innerWidth()){

//       $textLi=$textUl.children("li")
//       $textLi.first().appendTo($textUl)
//       currentX=0
     
//     }
//     $textUl.css({"left":currentX})


//   }
// }



function TextSlide(selectedText){            //속도조절문제
  this._currentX
  this._textWidth
  this._$text
  this._$textWrap = $(selectedText)

  this._init()
}

TextSlide.prototype._init=function(){

  this._currentX=this._$textWrap.children().position().left
  this._textWidth=this._$textWrap.find("li").innerWidth()+parseInt(this._$textWrap.find("li").css("margin-right"))
  this._$text=this._$textWrap.children();

  var stepX=-1
  var $currentPosition=this._currentX
  var textWidth=this._textWidth
  var $text=this._$text
  

    setInterval(function(){

      $currentPosition += stepX
      $text.css({"left":$currentPosition})  

    if($text.position().left<-textWidth){

      $text.css({"left":0})
      $currentPosition=0

    }
  },5)
}



function showPainting(){

  var $list=$("#painting_list")
  var $img

  for(var i=0; i<=11; i++){

    $img=$("<li><img src='images/painting"+(i+1)+".png' alt=''></li>")

    $img.appendTo($list)
  }

  var num
  var imgNum=$list.children().size()
  var $imgLi=$list.children()


  $imgLi.hide()
  $imgLi.eq(0).show()
  $imgLi.on("click",clickImg)

  function clickImg(){
    num=$imgLi.index($(this))

    if(num>=imgNum-1){
      num=-1
    }

    $(this).fadeOut(100,"easeOutCubic",function(){
      $(this).hide()
      $imgLi.eq(num+1).show()
      $(".mouse_click").children().html($("<span>"+(num+2)+" of 12 </span>"))
    })

  }

}

function viewAllPainting(){
  var $wrap

  $("#painting_more").on("click",openAll)

  function openAll(){
    $wrap=$("<div id='allpainting'></div>")
    $wrap.appendTo("body")
    $wrap.load('/markrothko/painting/painting.html',function(){
      var scrollHeight=$(document).scrollTop()

      openClose()

      titleInfo()

      movePosition()

      $("#exit").on("click",function(){
        $('html, body').css({'overflow': 'visible', "height":9500});
        $("#allpainting").remove()
        $(".painting_mouse").hide()
        $(".mouse").show()
        $(document).scrollTop(scrollHeight)
      })

    })
    
    
  }

}


function mapHover(){

  $("#map").children("ul").find("img").on("mouseenter",showInfo)
  $("#map").children("ul").find("img").on("mouseleave",hideInfo)

  function showInfo(){
    clearInterval(timer)

    $(".map_title").css({"opacity":0})
    $(".map_text").css({"opacity":0})
    $(".line").css({"height":0})

    $(this).parents("ul").children().show()
    $(".line").stop()
    $(".line").animate({"height":620},400,"easeOutCubic",function(){
      $(".map_title").stop()
      $(".map_title").animate({"opacity":1},200,"easeOutCubic")
      $(".map_text").stop()
      $(".map_text").animate({"opacity":1},200,"easeOutCubic")
    })
  }

  function hideInfo(){
    $(".map_title").css({"opacity":0})
    $(".map_text").css({"opacity":0})
    $(".line").css({"height":0})
    $("#map").children("ul").find("img").parents("ul").children().hide()
    $(".map_img").show()

    timer=setInterval(showLocation,3500)
  }


  var timer

  timer=setInterval(showLocation,3500)

  function showLocation(){
    $(".map_img").animate({"opacity":0.4},1,"easeOutCubic",function(){
      $(this).animate({"opacity":1},500,"easeInCubic")
    })

    //$(".map_img").css({"-webkit-animation":"flash 0.5s"})
  }

}


function aboutSwiper(){

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

}


