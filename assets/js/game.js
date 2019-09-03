let answers = [];
let answer = 0;

// un-editable list of animals for game
const allAnimals = ['Dogs', 'Cats', 'Rabbits', 'Birds', 'Guinea Pigs', 'Hamsters', 'Fish', 'Tortoises and Turtles', 'Lizards', 'Domestic Fowl', 'Snakes', 'Horses', 'Rats', 'Ferrets', 'Gerbils', 'Insects', 'Frogs and Toads', 'Mice'];

// load array with all questions
function loadQArray() {
    var questions = [
        $('#question1'),
        $('#question2'),
        $('#question3'),
        $('#question4'),
        $('#question5')
    ];

    return questions;
}

// when called, set question back to 1
function resetGame() {
    questions = loadQArray();
    questions.forEach(function(q) {
        q.hide();
    });

    $('#answer').hide();
    questions[0].show();
}

// on call, progress to next question and add answer to answers array
function processAns(current, answer) {
    nextQuestion(current);
    answers.push(answer);
}

// move to next question
function nextQuestion(current) {
    let next = current + 1;

    questions = loadQArray();
    questions.forEach(function(q) {
        q.hide();
    });

    // if next tab is actually a question (5 questions)
    if (next <= 4) {
        questions[next].show();
    }
    // if next tab is answer...
    else {
        displayAnswer();
        $('#answer').show();
    }
}

// get random animal from array (temporary)
function formulateAnswer() {
    let rnd = Math.floor((Math.random() * allAnimals.length) + 1);
    answer = allAnimals[rnd]; 
}

// display answer in #answer div
function displayAnswer() {
    formulateAnswer();
    $('<br><br><p>Your ideal pets would be:</p><br><br> <h3> ' + answer + '</h3>').appendTo('#answer');
}

// on page load, reset game to ensure only question 1 is present
$(resetGame);