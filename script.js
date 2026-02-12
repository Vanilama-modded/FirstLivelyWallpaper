function livelyCurrentTrack(data) {
  let obj = JSON.parse(data);
  //when no track is playing its null
  if (obj != null)
  {
    console.log(obj.Title);
    if (obj.Thumbnail != null)
    {
        //base64 string
        console.log(obj.Thumbnail);
    }
  }
}