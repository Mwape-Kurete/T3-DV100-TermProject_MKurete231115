// ------------------
// trips array start
const arrTrips = [
    {
        txtName: "Gabon Coast",
        txtCost: 15000,
        destImg: "image8.jpeg",
        txtDescription: "Beautifully Tranquil, see what this part of africa has to offer. visit historical sites and famous beaaches whilst embracing Gabons culture and cuisine",
        txtType: "all inclusive",
        txtDuration: 5
    }, // pos 0
    {
        txtName: "Madagascar",
        txtCost: 10000,
        destImg: "image7.jpeg",
        txtDescription: "Beautifully Tranquil, see what this part of africa has to offer. visit historical sites and famous beaaches whilst embracing Madagascars culture and cuisine",
        txtType: "basic package",
        txtDuration: 3
    }, // pos 1
    {
        txtName: "Togo",
        txtCost: 17000,
        destImg: "image6.jpeg",
        txtDescription: "Beautifully Tranquil, see what this part of africa has to offer. visit historical sites and famous beaaches whilst embracing Togo culture and cuisine",
        txtType: "basic package",
        txtDuration: 6
    }, // pos 2
    {
        txtName: "Nigeria",
        txtCost: 12000,
        destImg: "image5.jpeg",
        txtDescription: "Beautifully Tranquil, see what this part of africa has to offer. visit historical sites and famous beaaches whilst embracing Togo culture and cuisine",
        txtType: "basic package",
        txtDuration: 3
    } //pos3
];
// trips array END
// ------------------

// ----------------------
// Filter & Sort Start
let appliedFilt = "";
// Filter & Sort END
// ------------------



// ----------------------
// when doc loads start
$(document).ready(function () {

    console.log("working");

    // Dynamically loading arr 

    filterTrips();

});
// when doc loads
// ------------------


// ----------------------
// load trips start
function loadTrips(tripsShowing) {

    $("#tripsCont").empty();

    // API 

    // Looping through arr 
    for (let i = 0; i < tripsShowing.length; i++) {
        const trip = tripsShowing[i];

        console.log(trip);

        // 1. 
        $("#tripsCont").append($("#tripsCardTemplate").html());

        // 2. 
        let currentChild = $("#tripsCont").children().eq(i);

        // 3.
        $(currentChild).find("#txtName").text(trip.txtName); 
        $(currentChild).find("#txtCost").text(trip.destPrice); 
        $(currentChild).find(".card-img-top").attr('src', '/assets/images/trips/' + trip.destImg)
        $(currentChild).find("#txtDescription").text(trip.txtDescription); 
        $(currentChild).find("#txtType").text(trip.txtType); 
        $(currentChild).find("#txtDuration").text(trip.txtDuration); 
    }


}

$("input[name='btnradio']").click(function(){

    appliedFilt = $(this).attr('value');

    console.log(appliedFilt);
    filterTrips();
});

function filterTrips(){
    let filteredTripsArr = []; 

    // filtering the trips 
    if(appliedFilt){
        filteredTripsArr = arrTrips.filter(trips => trips.txtType == appliedFilt);
    } else {

        filteredTripsArr = arrTrips;
    }

    loadTrips(filteredTripsArr);
}

// HOVER / CARD EFFECTS / ANIMATIONS 

$("tripsCont").on('click', '.card', function () {
    // Toggling visibility 

    $(this).find("#txtName").toggle();
    $(this).find("#txtDescription").toggle();
    $(this).find("#txtDuration").toggle();
    $(this).find("#txtType").toggle();
    $(this).find("#txtCost").toggle();

    // Making sure the image fits 
    $(this).find(".card-img-top").toggleClass("small");
})