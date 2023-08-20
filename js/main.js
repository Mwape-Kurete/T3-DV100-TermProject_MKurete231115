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
function loadTrips(){

    $("#tripsContainer").empty();

    // API 

    // Looping through arr 
    for (let i = 0; i < arrTrips.length; i++) {
        const trip = arrTrips[i];

        console.log(trip);
        
    }
}