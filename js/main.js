// ------------------
// trips array start
const arrTrips = [
    {
        destName: "Gabon Coast",
        destPrice: 15000,
        destImg: "image8.jpeg",
        destDescript: "Beautifully Tranquil, see what this part of africa has to offer. visit historical sites and famous beaaches whilst embracing Gabons culture and cuisine",
        packageType: "all inclusive",
        duration: 5,
        location: "Central Western Africa"
    }, // pos 0
    {
        destName: "Madagascar",
        destPrice: 10000,
        destImg: "image7.jpeg",
        destDescript: "Beautifully Tranquil, see what this part of africa has to offer. visit historical sites and famous beaaches whilst embracing Madagascars culture and cuisine",
        packageType: "basic package",
        duration: 3,
        location: "North Western Africa"
    }, // pos 1
    {
        destName: "Togo",
        destPrice: 17000,
        destImg: "image6.jpeg",
        destDescript: "Beautifully Tranquil, see what this part of africa has to offer. visit historical sites and famous beaaches whilst embracing Togo culture and cuisine",
        packageType: "basic package",
        duration: 6,
        location: "South East Africa"
    }, // pos 2
    {
        destName: "Nigeria",
        destPrice: 12000,
        destImg: "image5.jpeg",
        destDescript: "Beautifully Tranquil, see what this part of africa has to offer. visit historical sites and famous beaaches whilst embracing Togo culture and cuisine",
        packageType: "basic package",
        duration: 3,
        location: "North Western Africa"
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

    $("#tripsContainer").empty();

    // API 

    // Looping through arr 
    for (let i = 0; i < tripsShowing.length; i++) {
        const trip = tripsShowing[i];

        console.log(trip);

        // 1. 
        $("#tripsContainer").append($("#tripsCardTemplate").html());

        // 2. 
        let currentChild = $("#tripsContainer").children().eq(i);

        // 3.
        $(currentChild).find("#destName").text(trip.destName); 
        $(currentChild).find("#destPrice").text(trip.destPrice); 
        $(currentChild).find(".card-img-top").attr('src', '/assets/images/trips/' + trip.destImg)
        $(currentChild).find("#destDescript").text(trip.destDescript); 
        $(currentChild).find("#packageType").text(trip.packageType); 
        $(currentChild).find("#duration").text(trip.duration); 
        $(currentChild).find("#location").text(trip.location); 
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
        filteredTripsArr = arrTrips.filter(trips => trips.packageType == appliedFilt);
    } else {

        filteredTripsArr = arrTrips;
    }

    loadTrips(filteredTripsArr);
}