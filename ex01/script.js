// ===== Functions =====

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

function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

// ===== Tests =====

console.log("--- calculateGrade ---");
console.log("100 → " + calculateGrade(100));
console.log("90 → " + calculateGrade(90));
console.log("89 → " + calculateGrade(89));
console.log("0 → " + calculateGrade(0));
console.log("101 → " + calculateGrade(101));
console.log("-5 → " + calculateGrade(-5));
console.log("'hello' → " + calculateGrade("hello"));

console.log("--- checkAccess ---");
console.log("18, ticket → " + checkAccess(18, true));
console.log("17, ticket → " + checkAccess(17, true));
console.log("20, no ticket → " + checkAccess(20, false));