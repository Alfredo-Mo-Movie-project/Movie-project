function getAMovie(){
	fetch('https://toothsome-outgoing-order.glitch.me/movies').then(response => response.json()).then(function (response) {

		document.getElementById('movies').innerHTML = ''
		response.forEach(function (movie) {
			$('#movies').html(document.getElementById('movies').innerHTML += `<div>${movie.title}</div><div>${movie.rating}</div>`)

		})

	})
	}

getAMovie()

const movieURL = 'https://toothsome-outgoing-order.glitch.me/movies';

const movieToPost = {
	title: 'Lone Survivor',
	rating: '5'
}
const postOption = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	}  ,
	body: JSON.stringify(movieToPost),
};
fetch(movieURL, postOption).then(getAMovie)

