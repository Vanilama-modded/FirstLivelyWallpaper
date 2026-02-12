const headerTitle = document.getElementById("track-title");
const headerArtist = document.getElementById("track-artist");

// ref: https://github.com/rocksdanister/audio-visualizer-wallpaper/blob/main/src/Music%20Tunnel/js/script.js 

function livelyCurrentTrack(data) {
  let obj = JSON.parse(data);
  
  if (obj != null) {
    headerTitle.innerText = obj.Title;
    headerTitle.href = `https://www.google.com/search?q=${encodeURIComponent(obj.Title + " song")}`;
    headerTitle.style.pointerEvents = "auto";

    headerArtist.innerText = obj.Artist;
    headerArtist.href = `https://www.google.com/search?q=${encodeURIComponent(obj.Artist + " artist")}`;
    headerArtist.style.pointerEvents = "auto";
    
    console.log("Title:", obj.Title);
    console.log("Artist:", obj.Artist);
    
    if (obj.Thumbnail != null) {
      console.log("Thumbnail:", obj.Thumbnail);
    }
  } else {
    // clear/disable when no music is playing
    headerTitle.innerText = "No track";
    headerTitle.href = "#";
    headerTitle.style.pointerEvents = "none";
    
    headerArtist.innerText = "No artist";
    headerArtist.href = "#";
    headerArtist.style.pointerEvents = "none";
  }
}
