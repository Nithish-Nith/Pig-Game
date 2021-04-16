'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let active_Player = 0;
let totalvalue = 0;
let scoreboard = [0,0];
let gamestatus = true;

btnNew.addEventListener('click' , ()=>{
  location.reload();
 });

const gameSwitcher = () =>{
  totalvalue = 0;
  document.getElementById(`current--${active_Player}`).textContent = totalvalue;
  document.querySelector(`.player--${active_Player}`).classList.remove("player--active");
  active_Player = active_Player == 0 ? 1 :0;
  document.querySelector(`.player--${active_Player}`).classList.add("player--active");
}
console.log(typeof Current_Player);

btnRoll.addEventListener('click' , ()=>{
  if(gamestatus)
{
 const dice_Value = Math.trunc(Math.random()*6+1);
 console.log(dice_Value);
 diceEl.src=`dice-${dice_Value}.png`;
 totalvalue +=  dice_Value;
 if(dice_Value != 1 )
 {
  document.getElementById(`current--${active_Player}`).textContent = totalvalue;
 }
 else
 {
   gameSwitcher();
 }
}
});


btnHold.addEventListener('click',()=>{
  if(gamestatus)
  { 
   scoreboard[active_Player] += totalvalue;
   if(scoreboard[active_Player]>20)
   {
    document.querySelector(`.player--${active_Player}`).classList.add("player--winner");
    gamestatus=false;
    diceEl.src="winner.png";
    console.log(gamestatus);
   }
   document.getElementById(`score--${active_Player}`).textContent = scoreboard[active_Player];
   gameSwitcher();  
  }
});
