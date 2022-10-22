
//FETCH API OMDB
document.querySelector('#infoButton').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `http://www.omdbapi.com/?t=${choice}&apikey=8ffa8394`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
		if (data.Response == 'False'){
			document.querySelector('#title').innerText = 'Please Try Again'	
			document.querySelector('#actors').innerText = 'Actors'
			document.querySelector('#title').innerText = 'Title'
			document.querySelector('#moviePoster').src = 'images/noom-peerapong-2uwFEAGUm6E-unsplash.jpg'
			document.querySelector('#year').innerText = 'Year'
			document.querySelector('#rating').innerText = 'Rating'
			document.querySelector('#runTime').innerText = 'Runtime'
			document.querySelector('#plot').innerText = "Plot"
			document.querySelector('#director').innerText = 'Director'
			document.querySelector('#writers').innerText = 'Writers'
			document.querySelector('#awards').innerText = 'Awards'
			document.querySelector('#boxOffice').innerText = 'BoxOffice'
		}else{
			console.log(data)
			document.querySelector('#actors').innerText = data.Actors
			document.querySelector('#title').innerText = data.Title
			document.querySelector('#moviePoster').src = data.Poster 
			document.querySelector('#year').innerText = data.Year
			document.querySelector('#rating').innerText = data.Rated
			document.querySelector('#runTime').innerText = data.Runtime
			document.querySelector('#plot').innerText = data.Plot
			document.querySelector('#director').innerText = data.Director
			document.querySelector('#writers').innerText = data.Writer
			document.querySelector('#awards').innerText = data.Awards
			document.querySelector('#boxOffice').innerText = data.BoxOffice
			for(let i = 0; i < data.Ratings.length;i++){
				document.querySelector('#rated').innerText += data.Ratings[i].Source+ "   "
				document.querySelector('#ratedVal').innerText += `     ${data.Ratings[i].Value}`
			}
		}
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}