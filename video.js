let videoJs = document.getElementById("videoJs");
               let btn= document.getElementById("PlayPause");
               
function playVideo(){
     if(videoJs.paused){
          videoJs.play();
          videoJs.style="filter: none";
          btn.innerHTML='<div><i class="fa fa-pause-circle fa-5x"></i></div>';             
     }
     else{
          videoJs.pause();
          btn.innerHTML='<div><i class="fa fa-play-circle fa-5x"></i></div>'
     }
}

     videoJs.onended= ()=> {//when video stops "it will be blurred"           
          videoJs.style="filter: blur(40px)";
          btn.innerHTML='<div><i class="fa fa-pause-circle fa-5x"></i></div>'
          videoJs.innerHTML='<p style="color: white">Good Luck on the mastery of JS<p>'
     };