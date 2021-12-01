let randomNumber = 0;
$(".play").click(function() {
  let input = $("input").val();
  randomNumber = Math.ceil(Math.random() * 3);
  $(".computerChoice").text(randomNumber);
  $(".userChoice").text(input);
  if (randomNumber === 1) {
    $(".computerChoice").text("Rock")
  }
   if (randomNumber === 2) {
    $(".computerChoice").text("Scissors")
  }
   if (randomNumber === 3) {
    $(".computerChoice").text("Paper")
  }
});


