const handOptions = {
    'rock': './assets/Rock.png',
    'paper': './assets/Paper.png',
    'scissors': './assets/Scissors.png',
}

let Score = 0;

const pickUserHand = (hand) => {
    console.log(hand)
    //hide the current state
    const hands = document.querySelector('.hands');
    hands.style.display = 'none'
    //Show the Result State
    let contest = document.querySelector('.contest');
    contest.style.display = 'flex';
    //set the user pick
     document.querySelector('#userpickimage').src = handOptions[hand]

    let cpHand = pickComputerHand();
    refree(hand, cpHand);
}

const pickComputerHand = () => {
    let hands = ['rock', 'paper', 'scissors'];
    let cpHand = hands[Math.floor(Math.random() * 3)]
    //Set Computer Pic
    document.getElementById('cpickimage').src = handOptions[cpHand]

    return cpHand;
}

const refree = (userHand, cpHand) => {

    if (userHand === 'paper' && cpHand === 'scissors') {
        setDecision('You Loose')
    } else if (userHand === 'rock' && cpHand === 'scissors') {
        setDecision("You're the Winner!!!")
        setScore(Score + 1)
    } else if (userHand === 'scissors' && cpHand === 'scissors') {
        setDecision("It's a Tie")
    } else if (userHand === 'rock' && cpHand === 'rock') {
        setDecision("It's a Tie")
    } else if (userHand === 'paper' && cpHand === 'paper') {
        setDecision("It's a Tie")
    } else if (userHand === 'scissors' && cpHand === 'paper') {
        setDecision("You're the Winner!!!")
        setScore(Score + 1)
    } else if (userHand === 'rock' && cpHand === 'paper') {
        setDecision("You're the Winner!!!")
        setScore(Score + 1)
    } else if (userHand === 'rock' && cpHand === 'paper') {
        setDecision('You Loose')
    } else if (userHand === 'scissors' && cpHand === 'rock') {
        setDecision('You Loose')
    }
}

const setDecision = (decision) => {
    document.querySelector('.decision h1').innerText = decision;
    console.log(decision);
}

const setScore = (score) => {
    Score = score;
    document.querySelector('.score h1').innerText = score;
    console.log(score);
}

const restartGame = () => {
    //Show the current state
    const hands = document.querySelector('.hands');
    hands.style.display = 'flex'
    //Hide the Result State
    let contest = document.querySelector('.contest');
    contest.style.display = 'none';
}