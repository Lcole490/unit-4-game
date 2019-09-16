


var wins= 0;
var losses=0;
var targetNumber;


var userCounter;
var numberOptions = [];
var crystalsrcs= ["./assets/images/diamond3.jpg", 
"./assets/images/emerald2.jpg", "./assets/images/sapphire1.jpg","./assets/images/topaz1.jpg"]

console.log(crystalsrcs);


// for (var i=0; i < 4; i++){
    
//     var crystalDiv = $("<div>");
//     crystalDiv.addClass("col-3 my-col");

//     var imageCrystal =$("<img>");
//     imageCrystal.addClass("crystal-image");

//     imageCrystal.attr("src", crystalsrcs[i]);

//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     $(".my-row3").append(imageCrystal);

// console.log(imageCrystal);
// console.log(i);
// }







function beginGame(){

    userCounter=0;
    

    for (var h=0; h < 4; h++){

    var value = (Math.floor(Math.random() * 12) +1);
    console.log(value);
    numberOptions.push(value);

    console.log(numberOptions);
}

    targetNumber = (Math.floor(Math.random() *102) +19);
    $("#target").html("<h1>" + targetNumber + "</h1>"); // places or displays target number in "target" span 

    console.log(targetNumber);

    



}


function winOrLose(){


if (userCounter === targetNumber){
    alert("You Win!");
    wins++;
    document.getElementById("wins").textContent = wins;

    beginGame();

}

else if (userCounter > targetNumber){
    alert("You Lose!");
    losses++;
    document.getElementById("losses").textContent = losses;

    beginGame();
}

}




$(document).ready(function(){


// for (var i=0; i < 4; i++){
    
//     var crystalDiv = $("<div>");
//     crystalDiv.addClass("col-3 my-col");

//     var imageCrystal =$("<img>");
//     imageCrystal.addClass("crystal-image");

//     imageCrystal.attr("src", crystalsrcs[i]);

//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     $(".my-row3").append(imageCrystal);


// }

beginGame();

for (var i=0; i < 4; i++){
    
    var crystalDiv = $("<div>");
    crystalDiv.addClass("col-3 my-col");

    var imageCrystal =$("<img>");
    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", crystalsrcs[i]);

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $(".my-row3").append(imageCrystal);


}

$(".crystal-image").on("click", function(){


var crystalValue = ($(this).attr("data-crystalvalue"));
crystalValue = parseInt(crystalValue);

userCounter += crystalValue;


console.log(crystalValue);
$("#currentValue").html("<h1>" + userCounter + "</h1>");

});



winOrLose();









})
