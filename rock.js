const choices = document.querySelectorAll('.choice');
let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', function() {
    const computerChoice = Math.floor(Math.random() * 3);
    const userChoice = this.id;
    const result = checkWinner(userChoice, computerChoice);

    updateScore(result);
    updateMessage(userChoice, computerChoice, result);
  });
});

function checkWinner(user, computer) {
  if (user === computer) return 'draw';
  if ((user === 'Rock' && computer === 1) || (user === 'paper' && computer === 2) || (user === 'scissors' && computer === 0)) return 'win';
  return 'lose';
}

function updateScore(result) {
  if (result === 'win') {
    userScore++;
    document.getElementById('user-score').innerText = userScore;
  } else if (result === 'lose') {
    computerScore++;
    document.getElementById('computer-score').innerText = computerScore;
  }
}

function updateMessage(userChoice, computerChoice, result) {
  let message = '';
  switch(computerChoice) {
    case 0: computerChoice = 'Rock'; break;
    case 1: computerChoice = 'paper'; break;
    case 2: computerChoice = 'scissors'; break;
  }
  if (result === 'win') {
    message = `You win! ${userChoice} beats ${computerChoice}.`;
  } else if (result === 'lose') {
    message = `You lose! ${computerChoice} beats ${userChoice}.`;
  } else {
    message = `It's a draw! Both players chose ${userChoice}.`;
  }
  document.getElementById('result').innerText = message;
}
