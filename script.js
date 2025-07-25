function calculateGrade() {
  // Get marks for 5 subjects using prompt
  let marks1 = parseFloat(prompt("Enter marks for Subject 1:"));
  let marks2 = parseFloat(prompt("Enter marks for Subject 2:"));
  let marks3 = parseFloat(prompt("Enter marks for Subject 3:"));
  let marks4 = parseFloat(prompt("Enter marks for Subject 4:"));
  let marks5 = parseFloat(prompt("Enter marks for Subject 5:"));

  // Validate input
  if (isNaN(marks1) || isNaN(marks2) || isNaN(marks3) || isNaN(marks4) || isNaN(marks5)) {
    alert("Please enter valid numbers for all subjects.");
    return;
  }

  // Calculate total and average
  let total = marks1 + marks2 + marks3 + marks4 + marks5;
  let average = total / 5;
  let grade = "";

  // Assign grade based on average
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Show result
  alert(`Total Marks: ${total}\nAverage: ${average.toFixed(2)}\nGrade: ${grade}`);
}
