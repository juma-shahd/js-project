function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(95));
console.log(calculateGrade(85));
console.log(calculateGrade(50));
console.log(calculateGrade(150));
console.log(calculateGrade(-5));
console.log(calculateGrade("hello"));