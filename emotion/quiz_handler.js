function saveQuizScore(score) {
    let quizResults = JSON.parse(localStorage.getItem('quizResults')) || {};
    if (!quizResults.quizScores) {
        quizResults.quizScores = [];
    }
    quizResults.quizScores.push(score);
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
}

// Example usage:
// After quiz completion, call:
// saveQuizScore(85); // where 85 is the calculated score
