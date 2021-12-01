let randomNumber = 0;
$(".play").click(function() {
  let input = $("input").val();
  randomNumber = Math.ceil(Math.random() * 3);
  $(".computerChoice").text(randomNumber);
  $(".userChoice").text(input);
  if (randomNumber === 1) {
    $(".computerChoice").text("rock")
  }
   if (randomNumber === 2) {
    $(".computerChoice").text("scissors")
  }
   if (randomNumber === 3) {
    $(".computerChoice").text("paper")
if (userChoice==="rock"||userChoice==="paper"||userChoice==="scissors")
  
  
   
});



//is that all for day 3?
// you can do day 3 goal 2 or start day 4!
  // let me know if you get stuck!
  // trying it out day 3 goal 2 on popcode first 
  // okay great! why btw? glitch should be better, happy to help if you need
  
  // hint: you can use !== to check if something is *not* equal
  // nice or statement!!!!
  // alert state for if correct input it will put exp. rock vs paper else incorrect userinput both 