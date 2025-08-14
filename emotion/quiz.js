function saveQuizScore() {
    const score = parseInt(document.getElementById('score').textContent);
    const totalQuestions = parseInt(document.getElementById('total-questions').textContent);
    const percentage = (score / totalQuestions) * 100;

    // Get existing results or initialize new object
    let quizResults = JSON.parse(localStorage.getItem('quizResults')) || {};
    
    // Initialize quizScores array if it doesn't exist
    if (!quizResults.quizScores) {
        quizResults.quizScores = [];
    }
    
    // Add new score
    quizResults.quizScores.push(percentage);
    
    // Save back to localStorage
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
}

// Call this when quiz is completed
window.addEventListener('load', () => {
    // If this is a quiz results page (has score element)
    if (document.getElementById('score')) {
        saveQuizScore();
    }
});
