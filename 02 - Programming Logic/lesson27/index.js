const userScore = 1250;

if (userScore >= 1000) {
  console.log('VIP user!');
} else {
  console.log('Normal user!');
}

console.log(userScore >= 1000 ? 'VIP user!' : 'Normal user!');

const userLevel = userScore >= 1000 ? 'VIP user!' : 'Normal user!';
console.log(userLevel);
