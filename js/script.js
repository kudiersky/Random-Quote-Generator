/* Welcome to my code: Thise JS programme allows a random quote from an array, to be displayed on a
HTML page. With the following features:

-Picks a random quote
-Quote is only displayed once before recycling
-A random choice of an array of themed colours is set as the background
-The generate buttom run the script

Work on points:
I would like to get the GetElementByID parts of the script in a fuction to tidy up the script.

Jake Kudiersky
*/

var selectRandomQuote; //gives the random number from 0 - quote.length
var displayedQuote; // the displayed message on the page including the quote
var displayQuote ; //used to identify the random quotes

function noQuoteRepeat(){
  quotes = quotes.concat(usedQuotes)  //once a quote shas been displayed it is moved to an array names usedArray. once all quotes are used then the quotes Array and the usedQuotes Array are combined and the usedQuotes emptied.
  usedQuotes = [] //this empties the usedQuote array to prevent a duplication of objects.
}

function removeQuoteFromArray(){   //removes quote from active list to usedQuotes Array. Without deleting the object.
quotes.splice(selectRandomQuote,1);
usedQuotes.push(displayQuote);

  if (quotes.length < 1){    //run the function of the quote bank is empty and needs refilling.
    noQuoteRepeat()
    }
  }

function getRandomColor(){ // chooses the random colour from the array randomColors.
randomColor = Math.floor(Math.random() * colors.length );  //removed '+1' to allow range of 0 - colors.length.
backgroundcolor = (colors[randomColor]); //pick random colour from js/randomColors.js.
}

function messagewithYear(){
  displayedQuote = document.getElementById ("quote-box").innerHTML = //Future proof with fuction to prevent duplication.
  "<h2>"+ displayQuote.category + "</h2>" +
  "<p class=quote>"+ displayQuote.quotation + "</p>" +
  "<p class=source>"+ displayQuote.source + "</p>" +
  "<p class=year>"+ displayQuote.year + "</p>"
  console.log(quotes); //deveploper log tool
}

  function messageWithoutYear(){ //Future proof with fuction to prevent duplication
  displayedQuote = document.getElementById ("quote-box").innerHTML =
  "<h2>"+ displayQuote.category + "</h2>" +
  "<p class=quote>"+ displayQuote.quotation + "</p>" +
  "<p class=source>"+ displayQuote.source + "</p>"
  console.log(quotes);  //deveploper log tool
}

function setBackGround(){  //set colour of background on HTML page from randomColour Array
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

}

document.getElementById('loadQuote').addEventListener("click",printQuote, false); //run fuction printQuote on click
