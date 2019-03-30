/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/* Created quotes array - (most objects  in the array
contain an additional "director" property ) */

var quotes = [

  {
      quote: "I'm going to make him an offer he can't refuse",
      source: "Marlon Brando",
      citation: "The Godfather",
      year: 1972,
      director: "Francis Ford Coppola",

  },

  {
      quote: "What we've got here is failure to communicate",
      source: "Strother Martin",
      citation: "Cool Hand Luke",
      year: 1967,
      director: "Stuart Rosenberg",


  },

  {
      quote: "Aw, man. I shot Marvin in the face",
      source: "John Travolta",
      citation: "Pulp Fiction",
      director: "Quentin Tarantino",

  },

  {
      quote: "You're gonna need a bigger boat",
      source: "Roy Scheider",
      citation: "Jaws",
      year: 1975,
      director: "Steven Speilberg",

  },

  {
      quote: "Houston we have a problem",
      source: "Tom Hanks",
      citation: "Apollo 13",
      year: 1995,
      director: "Ron Howard",

  },

  {
      quote: "Nobody puts Baby in a corner.",
      source: "Patrick Swayze",
      citation: "Dirty Dancing",
      year: 1987,
      director: "Emile Ardolino",

  },

  {
      quote: "Say hello to my little friend!",
      source: "Al Pacino",
      citation: "Scarface",
      director: "Brian De Palma"

  },

  {
      quote: "Dear Diary: My teen angst bullshit now has a body count.",
      source: "Winona Ryder",
      citation: "Heathers",
      director: "Michael Lehmann"


  },

  {
      quote: "I'll get you my pretty! And you're little dog too!",
      source: "Margaret Hamilton",
      citation: "The Wizard of Oz",
      year: 1939,

  },

  {
    quote: "Gentlemen, you can't fight in here! This is the War Room!",
    source: "Peter Sellers",
    citation: "Dr. Strangelove",
    year: 1964,
    director: "Stanley Kubrick"

  }

] ;

//getRandomQuote function - returns a random quote from the quotes array

function getRandomQuote() {

  //get a random number from zero to the length of the quotes array
  var rand = Math.floor(Math.random() * (quotes.length ));

  //use random number to select a quote object from quotes array
  var randQuote = quotes[rand];

  //return the quote
  return randQuote;

}


function printQuote() {

    //calls the getRandomQuote function and assigns it to variable "rand"
    var rand = getRandomQuote();

    //sets the html string
      var html = '<p class="quote">' + rand['quote'] + '</p>';
      html += '<p class="source">' + rand['source'];

          //if the quote has a citation property add appropriate html to string
          if(rand['citation']) {
          html += '<span class="citation">' + rand['citation'] +'</span>';
          }

          //if the quote has a year property add appropriate html to string
          if(rand['year']) {
            html += '<span class="year">' + rand['year'] + '</span>';
          }

        //if the quote has a director property add appropriate html to string
        if(rand['director']) {
              html += '<br><span class="director">Director - ' + rand['director'] + '</span>';
            }

        //end of the html string
        html += '</p>';

    //set innerHTML so that the quote prints in the right place and also
    //so the button works
      document.getElementById("quote-box").innerHTML = html;

    //assign a variable to changeBg function
    var randColor = changeBg();

    //assign a different variable to change the button color
    var randButtonColor = changeBg();

    //if background color is the same as button background color then make
    //the button background color gray
    if (randButtonColor === randColor) {
        randButtonColor = "dimgray";
    }

  //change the background color to the random color returned from the
  //changeBg function
  document.getElementsByTagName("body")[0].style.backgroundColor = randColor;
  document.getElementsByTagName("button")[0].style.backgroundColor = randButtonColor;

}

//array of colors used for changing the background color
var colors = ["purple", "black", "blue", "deeppink", "tomato", "lime",
              "coral", "crimson", "darkcyan", "darkorange", "firebrick",
              "LightSeaGreen" , "plum", "SteelBlue" ,"SandyBrown", "SeaGreen"];

function changeBg() {

    //select a random number from zero to the length of the colrors array
    var rand = Math.floor(Math.random() * (colors.length ));

    //use random number to select a color from the colors array
    var randColor = colors[rand];

    //return the randomly selected color name
    return randColor;

}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
