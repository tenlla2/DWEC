navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUsermedia || navigator.oGetUserMedia;
 if(navigator.getUserMedia){
  navigator.getUserMedia({video: true}, video,videoError);
 }
 function video(stream){
  document.querySelector('#a').src = window.URL.createObjectURL(stream);
 }
 function videoError(e){
  alert("Error");
 }