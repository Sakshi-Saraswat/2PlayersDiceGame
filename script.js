'use strict';
const player1=document.querySelector('.player--0');
const player2=document.querySelector('.player--1');
const score1= document.querySelector('#score--0');
const score2= document.querySelector('#score--1');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const winner=document.querySelector('.winner');
const winner1=document.querySelector('.winner1');

let scores, currentScore, activePlayer, playing;

function init(){
    scores=[0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score1.textContent = 0;
    score2.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;
    dice.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active');
    player2.classList.remove('player--active');

}; 
init();

function switchPlayer()
{
    document.querySelector(`#current--${activePlayer}`).textContent=0;
        currentScore=0;
        if(activePlayer==0)
        {
            activePlayer=1;
            player1.classList.remove('player--active');
            player2.classList.add('player--active');
        }
        else if(activePlayer==1)
        {
            activePlayer=0;
            player2.classList.remove('player--active');
            player1.classList.add('player--active');
        }
}
btnNew.addEventListener('click',init);

btnRoll.addEventListener('click',function(){
   
    const dice1=Math.trunc(Math.random()*6)+1;
    console.log(dice1);
    dice.classList.remove('hidden');
    dice.src=`img/dice-${dice1}.png`
    if(dice1 != 1){
        currentScore=currentScore+dice1;
        document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
    }
    else{
        switchPlayer();
        
    }  
});

btnHold.addEventListener('click',function(){
    scores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];
    if(scores[activePlayer] >= 10){
        dice.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        if(activePlayer==0){
            alert('PLAYER1 WON!!');
           
        }
        else if(activePlayer==1){
            alert('PLAYER2 WON!!');
            
        }
       
    }
    else{
        switchPlayer();

    }


});