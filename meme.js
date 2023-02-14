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

<div class="container w-25"><img src="${img}" class="mt-5 w-100" alt="..."></div>
<div class="caption mt-1 text-center"><h5>${title}</h5></div>
<div class=" mt-1 text-center"><p>${artist}</p></div>
<div class="ad text-center"> <audio controls >
<source src="${audio}" type="audio/ogg">
</audio></div>
</div>
<div class="text-center "><h4>May be these</h4></div>
<div class=" row">
<div class="col-6 text-center ">
<h5>${secondtitle}</h5>
<div class=" mt-1 text-center"><p>${secondartist}</p></div>
<div class="ad text-center"> <audio controls>
<source src="${secondsong}" type="audio/ogg">
</audio>
</div>
</div>


<div class="col-6 text-center">
<h5>${ttitle}</h5>
<div class=" mt-1 text-center"><p>${tartist}</p></div>
<div class="ad "> <audio controls >
<source src="${tsong}" type="audio/ogg">

</audio></div>
</div>
</div>
</div>

`

}