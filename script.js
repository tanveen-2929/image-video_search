const key="46380814-79c5256b989c1291cfb03910b";

function srchImg(e){
  e.preventDefault()
  var q=$('#query').val();
  url =  "https://pixabay.com/api/?key="+key+"&q="+q+"&image_type=photo&orientation=horizontal";
  var content=""
  $.getJSON(url,function(data){
   $('#result').empty()
   images = data.hits;
   $.each(images,function(key,image){
    content+=` 
        <div class="col-md-4 mb-3">
          <img src="${image.largeImageURL}" class="rounded-start w-100" alt="${image.tags}"  title="${image.tags}"  height='250px'>
        </div>` 
   })
   $('#result').append(content)
  })

}

function srchVid(e){
  e.preventDefault()
  var q=$('#query').val();
  url ="https://pixabay.com/api/videos/?key="+key+"&q="+q+"&video_type=all";
  var content=""
  $.getJSON(url,function(data){
   $('#result').empty()
   videos = data.hits;
   $.each(videos,function(key,video){
    content+=` 
        <div class="col-md-4 mb-3">
          <video src="${video.videos.medium.url}" class="rounded-start w-100" alt="${video.tags}"  title="${video.tags}"  height='250px' controls></video>
          <a target='_blank' href='${video.videos.large.url}' style="text-decoration:none; color:#ff0080">View in Full Screen</a>
        </div>` 
   })
   $('#result').append(content)
  })

}