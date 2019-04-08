var randomNumber = Math.floor(Math.random() * 100);
var targetNumber = randomNumber;
var purple = Math.floor(Math.random() * 13);
var pink = Math.floor(Math.random() * 13);
var blue = Math.floor(Math.random() * 13);
var crystalValue = this;
  $("#number-to-guess").text(randomNumber);

  var counter = 0;
  var numberOptions = [randomNumber];

  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", randomNumber);
  }

    $("#purple").on("click", function() {
      alertCrystalPoint(purple)
    })

    $("#pink").on("click", function() {
        alertCrystalPoint(pink)
    })

    $("#blue").on("click", function() {
        alertCrystalPoint(blue)
    })

    function alertCrystalPoint(score) {
        alert(score)
    }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    counter = counter += crystalValue;
    console.log(crystalValue);

    // $(".crystal-image").on("click", function () {
		// 	var newScore = score += parseInt($(this).attr("value")); 
		// 		console.log("New Score: " + newScore); 
		// 	// $(".scoreDisplay").html(newScore); 
  

    // $(".crystal-image").on("click", function() {
    //   var crystalValue = ($(this).attr("data-crystalvalue"));
    //   crystalValue = parseInt(crystalValue);
    //   counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });