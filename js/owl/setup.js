let nFilms = 0;
let todosFilms = document.getElementsByClassName("box-filme");



$(".botao.avancar").on('click', function(){

    if(nFilms + 9 <= todosFilms.length){
        let filmeAtual = document.getElementsByClassName("box-filme")[nFilms];
        let proximoFilme = document.getElementsByClassName("box-filme")[nFilms+9];
        filmeAtual.style.display = "none";
        proximoFilme.style.display = "block";
        nFilms++;
    }else{
        $(".botao.avancar").attr("display","none")
    }
    
});

$(".botao.voltar").on('click', function(){    
    let filmeAtual = document.getElementsByClassName("box-filme")[nFilms+8];
    let proximoFilme = document.getElementsByClassName("box-filme")[nFilms-1];
    filmeAtual.style.display = "none";
    proximoFilme.style.display = "block";
    nFilms--;
   
    
});


