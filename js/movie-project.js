function getMovies(){
	fetch('https://toothsome-outgoing-order.glitch.me/movies').then(response => response.json()).then(function (response) {
		document.getElementById('movies').innerHTML = ''
		response.forEach(function (movie) {
			$('#movies').html(document.getElementById('movies').innerHTML += `<div class="card d-flex flex-column align-items-center col-12 col-lg-4"><div class="px-2 bg-primary align-self-stretch text-center">${movie.title}</div><div class="text-dark">Movie Rating: ${movie.rating}/5</div><div class="text-dark">Movie ID:#${movie.id}</div><button id="${movie.id}" type="submit" class="delete">Delete</button></div>`)
		})
	}).then(function (){
		let deleteOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		}

		$(`.delete`).click(function (e){
			e.preventDefault();
			 const movieID = e.target.id;
			fetch(`${movieURL}/${movieID}`, deleteOptions).then(getMovies);
			//location.reload();


		});
	})
	}

getMovies()


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

	fetch(movieURL, postOption).then(getMovies)
})

$('#edit-movie-button').click(function (e) {
	e.preventDefault()

	let editMovieTitle=$('#title-edit').val();

	let editMovieRating=$('#rating-edit').val();

	let editID=$('#id-number').val();



	const modification = {
		title:editMovieTitle ,
		rating: editMovieRating
	};

	const putOption = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		}  ,
		body: JSON.stringify(modification),
	};

	fetch(`${movieURL}/${editID}`, putOption).then(getMovies)
})