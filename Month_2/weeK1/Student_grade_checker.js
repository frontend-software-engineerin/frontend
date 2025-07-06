// Function to check grade
function checkGrade() {
  const scoreInput = document.getElementById("scoreInput").value;
  const score = Number(scoreInput);

  if (isNaN(score) || score < 0 || score > 100) {
    displayResult("Please enter a valid score between 0 and 100.");
    return;
  }

  const grade = calculateGrade(score);
  const message = giveFeedback(grade);
  displayResult(`Your grade is ${grade}. ${message}`);
}

// Function that returns grade based on score
function calculateGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

// Function that uses switch to give feedback
function giveFeedback(grade) {
  switch (grade) {
    case "A":
      return "Excellent work!";
    case "B":
      return "Good job!";
    case "C":
      return "You passed.";
    case "D":
      return "You need to work harder.";
    case "F":
      return "Failing. Better luck next time!";
    default:
      return "";
  }
}

// Function to display result using DOM
function displayResult(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = message;
}
