const headerTitle = document.getElementById("track-title");
const headerArtist = document.getElementById("track-artist");

function livelyCurrentTrack(data) {
  let obj = JSON.parse(data);
  
  if (obj != null) {
    headerTitle.innerText = obj.Title;
    headerTitle.href = `https://www.google.com/search?q=${encodeURIComponent(obj.Title + " song")}`;
    headerTitle.style.pointerEvents = "auto";
    
    headerArtist.innerText = obj.Artist;
    headerArtist.href = `https://www.google.com/search?q=${encodeURIComponent(obj.Artist + " artist")}`;
    headerArtist.style.pointerEvents = "auto";
  } else {
    headerTitle.innerText = "No track";
    headerTitle.href = "#";
    headerTitle.style.pointerEvents = "none";
    
    headerArtist.innerText = "No artist";
    headerArtist.href = "#";
    headerArtist.style.pointerEvents = "none";
  }
}

function livelyAudioListener(array) {
}

function livelyPropertyChanged(name, val) {
}

function livelySystemInformation(data) {
}