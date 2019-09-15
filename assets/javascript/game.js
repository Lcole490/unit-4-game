



var targetNumber;
$("target").text(targetNumber); // places or displays target number in "target" span 

var userCounter = 0;
var numberOptions = [];
var crystalsrcs= ["./assets/images/diamond3.jpg", 
"./assets/images/emerald2.jpg", "./assets/images/sapphire1.jpg","./assets/images/topaz1.jpg"]


for (var h=0; h < 4; h++){

    var value = (Math.floor(Math.random() * 12) +1);
    numberOptions.push(value);
}


for (var i=0; i < numberOptions.length; i++){
    
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

counter += crystalValue;

if (counter === targetNumber){
    alert("You Win!");
}

else if (counter > targetNumber){
    alert("You Lose!");
}




});

