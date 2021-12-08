let randomNumber = 0;
$(".play").click(function() {
  let input = $("input").val();
  let comp;
  randomNumber = Math.ceil(Math.random() * 3);
  $(".computerChoice").text(randomNumber);
  if (randomNumber === 1) {
    $(".computerChoice").text("rock");
    comp = "rock";
  }
  if (randomNumber === 2) {
    $(".computerChoice").text("scissors");
    comp = "scissors";
  }
  if (randomNumber === 3) {
    $(".computerChoice").text("paper");
    comp = "paper";
  }

  if (input === "rock" || input === "paper" || input === "scissors") {
    $(".userChoice").text(input);
  } else {
    alert("Incorrect Choice Exp. rock,paper or scissors");
  }
  if (input === comp) {
    $(".result").text("There's a tie!");
  } else if (
    (input === "rock" && comp === "scissors") ||
    (input === "paper" && comp === "rock") ||
    (input === "scissors" && comp === "paper")
  ) {
    $(".result").text("You win!");
  } else {
    $(".result").text("You lost ;(");
  }
$("input").val("");
});


// why compound conditionals are awesome!!!!
// if (
//     (input === "rock" && comp === "scissors") ) {
//    $(".result").text("You win!");
// } else if(input === "paper" && comp === "rock") {
//    $(".result").text("You win!");
// } else if (input === "scissors" && comp === "paper") {
//    $(".result").text("You win!");
// } else if ()


// I think it went really good
// yeah I think I need more practice but for the most part I got it
//educated guess?
// yes 
// yes it does 
// yes i understand the subject 
// most fun was when i lost the ai
// i totally knew that was gonna work totally
// wait it works dont change it try it out
//input.val = "reset"
//input type = "reset" (".input").text("")
//clear()
//let input = $(".input").text("")
// we did it
// then wouldnt we add else if print(you lose)
//is that all for day 3?
// you can do day 3 goal 2 or start day 4!
// let me know if you get stuck!
// trying it out day 3 goal 2 on popcode first
// okay great! why btw? glitch should be better, happy to help if you need

// hint: you can use !== to check if something is *not* equal
// nice or statement!!!!
// alert state for if correct input it will put exp. rock vs paper else incorrect userinput both
// so how would i do the first choice
// yes
// its not printing now
// thank you
// ofc :)
// i got the alert Incorrect Choice Exp. rock,paper and scissors

// yay!!!!! awesome work today :D
// i tied a ai
