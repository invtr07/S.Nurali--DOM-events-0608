let videoJs = document.getElementById("videoJs");
let btn= document.getElementById("PlayPause");
               
function playVideo(){
     if(videoJs.paused){
          videoJs.play();
          videoJs.style="filter: none";
          btn.innerHTML='<div><i class="fa fa-pause-circle fa-5x"></i></div>';  
          //browser should delete this div if user will rewatch the video
          if(endWish=document.getElementsByClassName("luck")){
               videoJs.removeChild(endWish);
          }           
     }
     else{
          videoJs.pause();
          btn.innerHTML='<div><i class="fa fa-play-circle fa-5x"></i></div>'
     }
}

     videoJs.onended= ()=> {           
          videoJs.style="filter: blur(40px)";
          btn.innerHTML='<div><i class="fa fa-play-circle fa-5x"></i></div>'
          // let container= document.getElementById("container");
          let wishMessage = document.createElement("div");
          wishMessage.className='luck';
          wishMessage.innerHTML='Good luck man with tackling JS!';
          
          videoJs.appendChild(wishMessage);
      };

      

      


  