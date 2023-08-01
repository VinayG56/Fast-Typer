window.addEventListener('load',init)

//Levels
const levels = {
    easy : 10,
    medium : 5,
    hard: 3
}

//Globals
const currentLevel = levels.easy;
let time;
let score=0;
let isPlaying;

const modeGame = document.querySelector('#mode_type');
const wordinput = document.querySelector('#word-input');
const currentword = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'existentialism','sovereignty','intelligence','handkerchief','pronounciation','javascript','enormity','disinterest','defibrillator','establishment','irregardless','byzantine','circumlocution','ignominious','nonplussed','definition','demagogue','blandishment','unabashed','onomatopoeia','horrendous','narcissistic','lackadaisical','lieutenant','equivocate','aggrandize','anachronistic','forbearance','interlocutor','multifarious','pejorative','surreptitious','vicissitude','vociferous','worcestershire','curmudgeon','mendacious','mischievous','agoraphobia','colloquialism','epistemology','grandiloquent','quintessential','pauciloquy','schadenfreude','remuneration','synecdoche','triskaidekaphobia','worcestershire','autochthonous'
];

let left = timeDisplay.innerHTML; 

function set(){
    if(modeGame.value == 10){
        seconds.innerHTML = 10;
        left = Number(10);
    }
    else if(modeGame.value == 5){
        seconds.innerHTML = 5;
        left = Number(5);
    }
    else if(modeGame.value == 3){
        seconds.innerHTML = 3;
        left = Number(3);
    }
}

function init(){
    //no.of seconds
    seconds.innerHTML = currentLevel;
    //load word from array
    showWords(words);
    //matvhing with input
    wordinput.addEventListener('input', startMatch);
    //call countDown
    setInterval(countDown, 1000);
    //check status of game
    setInterval(checkStatus,50);
}

function showWords(words){

    const randIndex = Math.floor(Math.random() * words.length);

    currentword.innerHTML = words[randIndex];
}

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWords(words);
        wordinput.value = '';
        score++;
    }
    
    if(score === -1)
    {
        scoreDisplay.innerHTML = 0;
    }
    else{
        scoreDisplay.innerHTML = score;
    }
}

function matchWords(){
    if(wordinput.value === currentword.innerHTML){
        message.innerHTML = 'Correct!!';
        left=0;
        return true;
    }
    else{
        message.innerHTML = '';
        return false;
    }
}

function countDown(){
    if(left>0)
    {
        left--;
    }
    else if(time===0){
        isPlaying=false;
    }
    timeDisplay.innerHTML = left;
}

function checkStatus()
{
    if(!isPlaying && left===0)
    {
        message.innerHTML = 'Game Over!!';  
        score = -1;
    }
}