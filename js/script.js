


var selectRandomQuote; //gives the random number from 0 - quote.length
var displayedQuote; // the displayed message on the page including the quote
var displayQuote ; //used to identify the random quotes
var backgroundcolor;

function colorStop(){
  colors.splice(0,colors.length);
}// once the array is empty this code stops the colour cycling

function removeQuoteFromArray(){
quotes.splice(selectRandomQuote,1)
}// removes quote from array

function getRandomColor(){
randomColor = Math.floor(Math.random() * colors.length );  //removed '+1' to allow range of 0 - colors.length
backgroundcolor = (colors[randomColor]); //pick random colour from js/randomColors.js
}

function messagewithYear(){
  displayedQuote = document.getElementById ("quote-box").innerHTML =
  "<h2>"+ displayQuote.category + "</h2>" +
  "<p class=quote>"+ displayQuote.quotation + "</p>" +
  "<p class=source>"+ displayQuote.source + "</p>" +
  "<p class=year>"+ displayQuote.year + "</p>"   //Future proof woth fuction to prevent duplication
  console.log(quotes);
}

  function messageWithoutYear(){
  displayedQuote = document.getElementById ("quote-box").innerHTML =
  "<h2>"+ displayQuote.category + "</h2>" +
  "<p class=quote>"+ displayQuote.quotation + "</p>" +
  "<p class=source>"+ displayQuote.source + "</p>"
  console.log(quotes);
}

function setBackGround(){
  document.body.style.background = backgroundcolor;
}


setInterval(function(){
    printQuote()}, 30000)// cycles through the page if generate is not clicked for 30000 milisec 30 secs

function  getRandomQuote() {
   selectRandomQuote = Math.floor(Math.random() * quotes.length );  //removed '+1' to allow range of 0 - quotes.length
   displayQuote = quotes[selectRandomQuote];
   console.log(displayQuote);
}

function printQuote(){

getRandomQuote() //this will be used in the pop line to remove from Array

getRandomColor() //random colour from array to maintain theme

setBackGround() //set a random colour from js/randomColors.js

if (displayQuote.year !== unknown){  //If statement to list the year only if it is available
 messagewithYear() //contains the HTML message with year displayed
  }

    else {
          messageWithoutYear() //contains the HTML message without a year displayed
        }

removeQuoteFromArray()

if(quotes.length === 0){
  colorStop()
}

}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
