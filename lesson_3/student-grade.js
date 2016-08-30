var score1 = Number(prompt('Enter score 1:'));
var score2 = Number(prompt('Enter score 2:'));
var score3 = Number(prompt('Enter score 3:'));
var avg = (score1 + score2 + score3) / 3;
var grade;

if (avg >= 90) {
  grade = 'A';
} else if (avg >= 70 && avg < 90) {
  grade = 'B';
} else if (avg >= 50 && avg < 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log('Based on the average of your 3 scores your letter grade is \"' + grade + '\".');