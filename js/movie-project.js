function getAMovie(){
	fetch('https://toothsome-outgoing-order.glitch.me/movies').then(response => response.json()).then(function (response) {

		document.getElementById('movies').innerHTML = ''
		response.forEach(function (movie) {
			$('#movies').html(document.getElementById('movies').innerHTML += `<div>${movie.title}</div>`)

		})

	})
	}

getAMovie()

