//Global variables in the beginning


var Scores, RoundScores, PlayerActive, Playing;


start();
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(Playing) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;


        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            RoundScores += dice;
            document.querySelector('#currentPlayer-' + PlayerActive).textContent = RoundScores;
        } 
           // Add CURRENT score to GLOBAL score
           Scores[PlayerActive] += RoundScores;
           // Update the UI
           document.querySelector('#s-' + PlayerActive).textContent = Scores[PlayerActive];
           
           var input = document.querySelector('.final-score').value;
           var winningScore;
           
           // Undefined, 0, null or "" are COERCED to false
           // Anything else is COERCED to true
           
            if(input) {
               winningScore = input;
           
            } else {
               winningScore = 10;
           }
           
           // Check if player won the game
                if (Scores[PlayerActive] >= winningScore) {
                    document.querySelector('#n-' + PlayerActive).textContent = 'Winner!';
                    document.getElementById('dice-1').style.display = 'none';
              
           
                    document.querySelector('.player-' + PlayerActive + '-box').classList.add('winner');
                    document.querySelector('.player-' + PlayerActive + '-box').classList.remove('active');
                    Playing = false;
                    } 
                    else {
                        //Next player
                nextPlayer();
        }
    }    
});


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (Playing) {
        // Add CURRENT score to GLOBAL score
        Scores[PlayerActive] += RoundScores;
        // Update the UI
        document.querySelector('#s-' + PlayerActive).textContent = Scores[PlayerActive];
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 10;
        }
        
        // Check if player won the game
        if (Scores[PlayerActive] >= winningScore) {
            document.querySelector('#n-' + PlayerActive).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
           
        
            document.querySelector('.player-' + PlayerActive + '-box').classList.add('winner');
            document.querySelector('.player-' + PlayerActive + '-box').classList.remove('active');
            Playing = false;
        } 
        else {
            //Next player
            nextPlayer();
        }
    }
});


document.querySelector('.btn-new').addEventListener('click', start);
function nextPlayer() {
    //Next player
    PlayerActive === 0 ? PlayerActive = 1 : PlayerActive = 0;
    RoundScores = 0;
    document.getElementById('currentPlayer-0').textContent = '0';
    document.getElementById('currentPlayer-1').textContent = '0';
    document.querySelector('.player-0-box').classList.toggle('active');
    document.querySelector('.player-1-box').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

function start() {
    Scores = [0, 0];
    PlayerActive = 0;
    RoundScores = 0;
    Playing = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('s-0').textContent = '0';
    document.getElementById('s-1').textContent = '0';
    document.getElementById('currentPlayer-0').textContent = '0';
    document.getElementById('currentPlayer-1').textContent = '0';
    document.getElementById('n-0').textContent = 'Player 1';
    document.getElementById('n-1').textContent = 'Player 2';
    document.querySelector('.player-0-box').classList.remove('winner');
    document.querySelector('.player-1-box').classList.remove('winner');
    document.querySelector('.player-0-box').classList.remove('active');
    document.querySelector('.player-1-box').classList.remove('active');
    document.querySelector('.player-0-box').classList.add('active');
}