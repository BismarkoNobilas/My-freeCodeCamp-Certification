function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }
    //sum = scores.reduce((partialSum, a) => partialSum + a, 0)
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
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

function hasPassingGrade(score) {
    let pass = true;
    if (score == "F") {
        pass = false;
    }
    return pass;
}

function studentMsg(totalScores, studentScore) {
    let pass;
    if (hasPassingGrade(getGrade(studentScore)) == false) {
        pass = "You failed the course.";
    } else {
        pass = "You passed the course.";
    }
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". " + pass;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));