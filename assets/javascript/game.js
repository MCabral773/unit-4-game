var randomNumber = Math.floor(Math.random() * 100);
var targetNumber = randomNumber;
var aqua = Math.floor(Math.random() * 13);
var red = Math.floor(Math.random() * 13);
var blue = Math.floor(Math.random() * 13);
  $("#number-to-guess").text(randomNumber);

  var counter = 0;
  var numberOptions = [randomNumber];

  for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("data-crystalvalue", randomNumber);
  }

    $("#aqua").on("click", function() {
      alertCrystalPoint(aqua)
    })

    $("#red").on("click", function() {
        alertCrystalPoint(red)
    })

    $("#blue").on("click", function() {
        alertCrystalPoint(blue)
    })

    function alertCrystalPoint(score) {
        alert(score)
    }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });