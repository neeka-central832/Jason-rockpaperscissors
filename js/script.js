let randomNumber = 0;
$(".play").click(function() {
  let input = $("input").val();
  randomNumber = Math.random();
 
  $(".userChoice").text(input);
});

