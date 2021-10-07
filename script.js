var Scores, RoundScores, PlayerActive, Playing;

start();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(Playing) {
        // Random number generates
        var dice = Math.floor(Math.random() * 6) + 1;

        //Display the dice
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            RoundScores += dice;
            document.querySelector('#currentPlayer-' + PlayerActive).textContent = RoundScores;
            nextPart();
        
        //Update the round score IF the rolled number was a 1
        if (dice == 1) {
            //Add score
            document.querySelector('#n-' + PlayerActive).textContent = 'Start again, you have lost!';
            document.getElementById('dice-1').style.display = 'none';
            Playing = false;
        } 
    } 
}   
});

// Update
function nextPart() {
    
    // Add CURRENT score to GLOBAL score
    Scores[PlayerActive] += RoundScores;
    document.querySelector('#s-' + PlayerActive).textContent = Scores[PlayerActive];
    var winningScore;
            
    // Undefined - false. else - true
    if(input) {
        winningScore = input;
                } 
    else {
        winningScore = 15;
                }
            
    // Check if player won the game
    if (Scores[PlayerActive] >= winningScore) {
        document.querySelector('#n-' + PlayerActive).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.querySelector('.player-' + PlayerActive + '-box').classList.add('winner');
        document.querySelector('.player-' + PlayerActive + '-box').classList.remove('active');
        Playing = false;
                }
} 



//Clicking on New game
document.querySelector('.btn-new').addEventListener('click', start);

function nextPlayer() {
   
    //Next user
    PlayerActive === 0 ? PlayerActive = 1 : PlayerActive = 0;
    RoundScores = 0;

    document.getElementById('currentPlayer-0').textContent = '0';
    document.querySelector('.player-0-box').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

//Starting game
function start() {
    Scores = 0;
    PlayerActive = 0;
    RoundScores = 0;
    Playing = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('s-0').textContent = '0';
    document.getElementById('currentPlayer-0').textContent = '0';
    document.getElementById('n-0').textContent = 'Player 1';
    document.querySelector('.player-0-box').classList.remove('winner');
    document.querySelector('.player-0-box').classList.remove('active');
    document.querySelector('.player-0-box').classList.add('active');
}