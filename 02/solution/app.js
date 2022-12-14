//CHALLENGE ONE - SOLUTION

function checkScores(scores) {
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let totalAmountOfScores = 0;
    let total = 0;

    scores.forEach(score => {
        total += score;
        totalAmountOfScores++;

        if (score >= highestScore) {
            highestScore = score;
        }
        else if (score <= lowestScore) {
            lowestScore = score;
        }
    });

    console.log("TEST RESULTS");
    console.log("---------------------------------------------");
    console.log("The highest score for this test is: " + highestScore);
    console.log("The lowest score for this test is: " + lowestScore);
    console.log("The average score for this test is: " + Math.round(total / totalAmountOfScores));
    console.log("---------------------------------------------");
}

let scores = [8, 2, 7, 9, 6, 6, 4, 2, 3, 8, 10, 10, 5, 0, 4, 6];
checkScores(scores);