function getAMovies(){
	fetch('https://toothsome-outgoing-order.glitch.me/movies').then(response => response.json()).then(function (response) {

		document.getElementById('movies').innerHTML = ''
		response.forEach(function (movie) {
			$('#movies').html(document.getElementById('movies').innerHTML += `<div>${movie.title}</div><div>${movie.rating}</div>`)

		})

	})
	}

getAMovies()


const movieURL = 'https://toothsome-outgoing-order.glitch.me/movies';



$('#new-movie-button').click(function (e) {
	e.preventDefault()

	let newMovieTitle=$('#movie-title').val();

	let newMovieRating=$('#rating').val();

	const movieToPost = {
		title:newMovieTitle ,
		rating: newMovieRating
	};

	const postOption = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		}  ,
		body: JSON.stringify(movieToPost),
	};

	fetch(movieURL, postOption).then(getAMovies)
})
