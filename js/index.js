let numberToGuess = Math.floor(Math.random() * 1000);
console.log(numberToGuess)

let counter = 10;

while (counter !== 0) {
  if (counter === 1) {
    alert("У вас последняя попытка!!!");
  }
  let numberFromUser = +prompt(`Угадай число от 0 до 1000 за ${counter} попыток!!!`);
  console.log(numberFromUser)
  if (isNaN(numberFromUser) || (numberFromUser < 0 || numberFromUser > 1000)) {
    alert('Вы ввели не число от 0 до 1000!');
  } else if (numberFromUser === numberToGuess) {
    alert('Вы угадали!');
    break;
  } else if (numberFromUser < numberToGuess) {
    alert('Загаданное число больше');
    counter--;
  } else if (numberFromUser > numberToGuess) {
    alert('Загаданное число меньше');
    counter--;
  }
}



