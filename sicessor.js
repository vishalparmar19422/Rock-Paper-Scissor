$(".btn").click((event) => {
  var userans = event.target.innerText;

  user(userans);
});

function bot() {
  var random = Math.floor(Math.random() * 3);
  var ans = "";
  if (random == 0) {
    ans = "ROCK";
    return ans;
  } else if (random == 1) {
    ans = "PAPER";
    return ans;
  } else if (random == 2) {
    ans = "SCISSORS";
    return ans;
  }
}

function user(ans) {
  var botans = bot();

  if (ans == botans) {
    document.querySelector(
      ".answer"
    ).innerText = `BOT choose ${botans} you choose ${ans}  DRAW`;
  } else if (ans == "ROCK" && botans == "SCISSORS") {
    document.querySelector(
      ".answer"
    ).innerText = `BOT choose ${botans} you choose ${ans}  YOU WON`;
  } else if (ans == "ROCK" && botans == "PAPER") {
    document.querySelector(
      ".answer"
    ).innerText = `BOT choose ${botans} you choose ${ans}  YOU LOST`;
  } else if (ans == "PAPER" && botans == "SCISSORS") {
    document.querySelector(
      ".answer"
    ).innerText = `BOT choose ${botans} you choose ${ans}  YOU LOST`;
  } else if (ans == "PAPER" && botans == "ROCK") {
    document.querySelector(
      ".answer"
    ).innerText = `BOT choose ${botans} you choose ${ans}  YOU WON`;
  } else if (ans == "SCISSORS" && botans == "ROCK") {
    document.querySelector(
      ".answer"
    ).innerText = `BOT choose ${botans} you choose ${ans}  YOU LOST`;
  } else if (ans == "SCISSORS" && botans == "PAPER") {
    document.querySelector(
      ".answer"
    ).innerText = `BOT choose ${botans} you choose ${ans}  YOU WON`;
  }
}
