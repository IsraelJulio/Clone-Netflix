buscarFilmes("Marvel");
var mostraFilmes = '';
function buscarFilmes(filme){
	
	axios.get('https://api.themoviedb.org/3/search/movie?api_key=5417af578f487448df0d4932bc0cc1a5&query='+filme).then(function(response){
		console.log(response);
		var filmePesquisado  =  response.data.results;
		
		console.log(filmePesquisado);

		for (var i = 0; i < filmePesquisado.length; i++) {
			
			mostraFilmes += '<img class="box-filme" src="https://image.tmdb.org/t/p/w300/'+filmePesquisado[i].poster_path+'">';
			


			console.log(filmePesquisado[i].title);			
		}
		
		document.getElementById('c2').innerHTML = mostraFilmes;			

		
	}).catch(function (error){
		console.log(error);
	}).finally(function(){
		let Allfilmes = document.getElementsByClassName("box-filme");
    	for (let i = 9; i < Allfilmes.length; i++){
        Allfilmes[i].style.display = "none";
        console.log(Allfilmes[i])
    	}
	});
}
