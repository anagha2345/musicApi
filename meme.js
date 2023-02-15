function search() {
    song = srch.value
    fetch(`https://itunes.apple.com/search?term=${song}`).then(data => data.json()).then(data => displaydata(data))

}
function displaydata(item) {
    title = item.results[0].trackName
    img = item.results[0].artworkUrl100
    audio = item.results[0].previewUrl
    artist = item.results[0].artistName
    secondtitle = item.results[1].trackName
    secondartist = item.results[1].artistName
    secondsong = item.results[1].previewUrl
    ttitle = item.results[2].trackName
    tartist = item.results[2].artistName
    tsong = item.results[2].previewUrl
    result.innerHTML = `<div class="container" >

<div class="container  w-25" ><img src="${img}" class="mt-5 w-100" alt="..."></div>
<div class="caption mt-1 text-center " style="color: rgb(109, 4, 27);"><h4><span>Title:</span> ${title}</h4></div>
<div class=" mt-1 text-center " style="color: rgb(109, 4, 27);"><h5><span>Artist:</span>${artist}</h5></div>
<div class="ad text-center"> <audio controls style="border:5px solid rgba(193, 98, 98, 0.573);
border-radius: 50px;" >
<source src="${audio}" type="audio/ogg">
</audio></div>
</div>

<div class="text-center mb-2"><button type="button" style="background-color: rgba(151, 3, 67, 0.728);" class="btn" onclick="search2()">More</button></div>
 <div id="scnd"></div>

`

}
function search2() {
    song = srch.value
    fetch(`https://itunes.apple.com/search?term=${song}`).then(data => data.json()).then(data => displaydatas(data))

}
function displaydatas(item) {
    
    secondtitle = item.results[1].trackName
    secondartist = item.results[1].artistName
    secondsong = item.results[1].previewUrl
    ttitle = item.results[2].trackName
    tartist = item.results[2].artistName
    tsong = item.results[2].previewUrl
    scnd.innerHTML=`<div class="row" >
<div class="col-lg-6 col-md-12 text-center" style="color: rgb(109, 4, 27);">
<h5>${secondtitle}</h5>
<div class=" mt-1 text-center "><p>Artist:${secondartist}</p></div>
<div class="ad text-center" > <audio controls style="border:10px solid rgba(193, 98, 98, 0.573);
border-radius: 50px; " >
<source  src="${secondsong}" type="audio/ogg" >
</audio>
</div>
</div>
<div class="col-lg-6 col-md-12 text-center" style="color: rgb(109, 4, 27);">
<h5>${ttitle}</h5>
<div class=" mt-1 text-center"><p>Artist:${tartist}</p></div>
<div class="ad "> <audio controls style="border:10px solid rgba(193, 98, 98, 0.573);
border-radius: 50px;">
<source src="${tsong}" type="audio/ogg">

</audio></div>
</div>
</div>
</div>`
}
/* 


 */