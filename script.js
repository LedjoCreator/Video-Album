
let videoAktive = null;
let butoniAktiv = null;

function luajOseNdalo(butoni, idVideo) {
  let video = document.getElementById(idVideo);

  if (video === videoAktive && !video.paused) {
    video.pause();
    butoni.innerText = '▶';
    videoAktive = null;
    butoniAktiv = null;
    return;
  }

  if (videoAktive && videoAktive !== video) {
    videoAktive.pause();
    videoAktive.currentTime = 0;
    if (butoniAktiv) butoniAktiv.innerText = '▶';
  }

  video.play();
  butoni.innerText = '⏸';
  videoAktive = video;
  butoniAktiv = butoni;

  video.onended = function () {
    butoni.innerText = '▶';
    videoAktive = null;
    butoniAktiv = null;
  };
}
function muteOseUnmute(idVideo, butoni) {

  const video = document.getElementById(idVideo);
  video.muted = !video.muted; // ndryshon gjendjen e zerit
  if (video.muted) { //nese vidjoja eshte muted atehere

    butoni.innerHTML = '🔊'; // ndryshon ikonen ne ze
  }

  else {
    butoni.innerHTML = '🔇'; // ndryshon ikonen pa ze  nese eshte duke luajtur atehere shtyp butonin per unmute
  }
}
function fullscreen(idVideo) {
  const video = document.getElementById(idVideo)
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullscreen) {//firefox
    video.mozRequestFullscreen();
  } else if (video.webkitRequestFullscreen) {//chrome safari dhe opera
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { //internet Explorer/Edge
    video.msRequestFullscreen();
  }
  else {
    alert("Ky shfletues nuk mbeshtet modalitetin e ekranit te plote per videon.");
  }



}


