$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// const fi = () => { 
//     const url = `http://www.omdbapi.com/?t=marvel`
//     fetch(url)
//         .then(response.json())
//         .then(filme => {
//             console.log(filme)
//     })
// }