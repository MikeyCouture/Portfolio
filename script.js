const portfolioApp = {};


portfolioApp.init = function (){

    const randomImages = [
        'assets/charl-van-rooy-548103-unsplash.jpg',
        'assets/jonas-off-1209715-unsplash.jpg',
        'assets/gabriel-santiago-22198-unsplash.jpg',
        'assets/john-duncan-1219609-unsplash.jpg',
        'assets/ryan-hutton-37733-unsplash.jpg',
        'assets/nanda-dian-pratama-764266-unsplash.jpg'
    ]

    let randomNum = Math.floor(Math.random() * 6);
    let randomImage = randomImages[randomNum];
    console.log(randomImage);

    $(".mainHeader").css({ "background-image": `linear-gradient(to bottom, #000000b3, #303030), url(${randomImage})`});
    
}

$(function () {
    portfolioApp.init();
});


