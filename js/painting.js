


function openClose(){

  $('html, body').css({'overflow': 'hidden', 'height': '100%'});

  $(".mouse").hide()
  $(".painting_mouse").show()

}

function titleInfo(){
  var $li=$("#painting_wrap").children().children()
  var $info=$("<div class='info'>Untitled 1970</div>")

  $li.on("mouseenter",showInfo)
  $li.on("mouseleave",hideInfo)

  function showInfo(){
    $info.css({"right":-10})
    $info.prependTo($(this))
    $info.stop()
    $info.animate({"right":-80},400,"easeOutCubic")
  }
  function hideInfo(){
    $info.stop()
    $info.animate({"right":-10},400,"easeOutCubic",function(){
      $info.remove()
    })
  }
}

function movePosition(){

  var downX;
  var downY;

  var $wrap=$("#painting_wrap")

  $wrap.css({"left":-($wrap.innerWidth()/3),"top":-($wrap.innerHeight()/3)})

  $wrap.on("mousedown",mouseDown)

  function mouseDown(e){
    downX=e.pageX-$wrap.position().left;
    downY=e.pageY-$wrap.position().top;

    $wrap.on("mousemove",mouseMove)   

    hoverLi()
  }

  function mouseMove(e){

    $wrap.css({"left":e.pageX-downX})
    $wrap.css({"top":e.pageY-downY})

    if($wrap.position().left>0){
      $wrap.css({"left":0})
    }
    if($wrap.position().top>0){
      $wrap.css({"top":0})
    }
    if($wrap.position().left<-$wrap.innerWidth()+$(window).innerWidth()){
      $wrap.css({"left":-$wrap.innerWidth()+$(window).innerWidth()})
    }
    if($wrap.position().top<-$wrap.innerHeight()+$(window).innerHeight()){
      $wrap.css({"top":-$wrap.innerHeight()+$(window).innerHeight()})
    }
  }

    $wrap.on("mouseup",stopMoving)

    function stopMoving(){
      
      $wrap.off("mousemove",mouseMove)

      outLi()
    }



    $(window).on("mousemove",changeMouse)
  
    function changeMouse(e){
      $(".painting_mouse:not(:animated)").animate({"left":e.pageX,"top":e.pageY},0.1,"easeInCubic")
    }
    
    function hoverLi(){
      $(".painting_mouse").children().animate({"width":50,"height":50},100,"easeOutCubic")
      $(".painting_mouse").children().css({"border":"solid 2px #DE432A"})
    }
    function outLi(){
      $(".painting_mouse").children().animate({"width":30,"height":30},100,"easeOutCubic")
      $(".painting_mouse").children().css({"border":"solid 1px black"})
    }

    $("#exit").on("mouseenter",mouseExit)
    $("#exit").on("mouseleave",outLi)

    function mouseExit(){
      hoverLi()
      $(".painting_mouse").animate({"right":52,"top":52})
    }

 }
