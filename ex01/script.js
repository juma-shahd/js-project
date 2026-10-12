function calculateGrade(score)
 {
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
function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

console.log(checkAccess(20, true));
console.log(checkAccess(15, true));
console.log(checkAccess(20, false));
console.log("--- Grade boundaries ---");
console.log(calculateGrade(100));
console.log(calculateGrade(90));
console.log(calculateGrade(89));
console.log(calculateGrade(0));
console.log(calculateGrade(101));

console.log("--- Access boundaries ---");
console.log(checkAccess(18, true));
console.log(checkAccess(17, true));
