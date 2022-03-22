function getAMovie(){
	fetch('https://fate-nice-quiet.glitch.me/movies').then(response => response.json()).then(response => console.log(response))
}
getAMovie()