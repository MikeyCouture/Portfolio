const portfolioApp = {};

// const imageArray = [
//     "waqar-1204134-unsplash.jpg",
//     "jonas-off-1209715-unsplash.jpg",
//     "charl-van-rooy-548103-unsplash.jpg"
// ]

portfolioApp.init = function (){


// poor attempt to sort through an array
    // for(let i=0; i<imageArray.length; i++){
    //     // return (imageArray[i]);
    //     // $(".mainHeader").append(imageArray[i])
    //     random = (imageArray[0][Math.floor(Math.random() * imageArray.length)]);
    //     console.log(imageArray[i]);
    // }

    $(".fa-plus-square").on("click", function (e) {
        // $(".longWeather").toggleClass("open");
        // $(".weather").toggleClass("close");
        console.log("im clicked!");
        $('.fa-plus-square').css({
            'transform': 'rotate(90deg)'
        })

    });





}


$(function () {
    portfolioApp.init();
});
