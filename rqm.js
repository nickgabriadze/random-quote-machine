const changeQuote = document.getElementById("text");
const changeAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const twitterLogo = document.getElementById("logo");
const twitterLink = document.getElementById("tweet-quote");
const arrOfQuotes = [
    ["-Thomas Edison", "\"Genius is one percent inspiration and ninety-nine percent perspiration.\""],
    ["-Yogi Berra", "\"You can observe a lot just by watching.\""],
    ["-Abraham Lincoln","\"A house divided against itself cannot stand.\""],
    ["-Johann Wolfgang von Goethe","\"Difficulties increase the nearer we get to the goal.\""],
    ["-Byron Pulsifer","\"Fate is in your hands and no one elses.\""],
    ["-Lao Tzu", "\"Be the chief but never the lord.\""],
    ["-Carl Sandburg","\"Nothing happens unless first we dream.\""],
    ["-Aristotle","\"Well begun is half done.\""],
    ["-Yogi Berra","\"Life is a learning experience, only if you learn.\""],
    ["-Margaret Sangster", "\"Self-complacency is fatal to progress.\""],
    ["-Buddha","\"Peace comes from within. Do not seek it without.\""],
    ["-Byron Pulsifer","\"	What you give is what you get.\""],
    ["-Iris Murdoch","\"We can only learn to love by loving.\""],
    ["-Karen Clark","\"Life is change. Growth is optional. Choose wisely.\""],
    ["-Wayne Dyer", "\"You'll see it when you believe it.\""],
    ["-Dale Carnegie", "\"	Today is the tomorrow we worried about yesterday.\""],
    ["-Lao Tzu","\"To lead people walk behind them.\""],
    ["-Publilius Syrus","\"A rolling stone gathers no moss.\""],
    ["-Napoleon Hill","\"Ideas are the beginning points of all fortunes.\""],
    ["-Benjamin Franklin","\"Well done is better than well said.\""],
    ["-Benjamin Franklin", "\"One today is worth two tomorrows.\""],
    ["-Albert Einstein", "\"God always takes the simplest way.\""],
    ["-Chinese proverb","\"Learning is a treasure that will follow its owner everywhere\""],
    ["-Socrates", "\"Be as you wish to seem.\""]
];

function randomNumber(){
    return Math.floor(Math.random() * (arrOfQuotes.length-1));
};

function randomColor(){
    newColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
    if (newColor == '#FFFFFF'){
        newColor = Math.floor(Math.random()*16777215).toString(16);
    }
    return newColor;
}
randNum = randomNumber();
changeAuthor.innerText = arrOfQuotes[randNum][0];
changeQuote.innerText =  arrOfQuotes[randNum][1];
getRandomColor = randomColor();
changeAuthor.style.color = getRandomColor;
changeQuote.style.color = getRandomColor;
newQuoteButton.style.backgroundColor = getRandomColor;
newQuoteButton.style.color = "#FFFFFF";
twitterLogo.style.color = getRandomColor;
document.body.style.backgroundColor = getRandomColor;
twitterLink.href = "https://twitter.com/intent/tweet?text=" +  encodeURIComponent(changeQuote.innerText  + " " + changeAuthor.innerText);

function getNewQuote(){
randNum = randomNumber();
getRandomColor = randomColor();

newQuoteButton.style.color = "#FFFFFF";



$('html body').animate({backgroundColor: getRandomColor}, 1500, function(){
    document.body.style.backgroundColor = getRandomColor;
});

$('#author').animate({color: getRandomColor, opacity: 0}, 1000, function(){
    $(this).animate({opacity: 1}, 1000);
    changeAuthor.innerText = arrOfQuotes[randNum][0];
    changeAuthor.style.color = getRandomColor;
});
$('#new-quote').animate({backgroundColor: getRandomColor}, 1000, function(){
    newQuoteButton.style.backgroundColor = getRandomColor;
    changeQuote.style.color = getRandomColor;

});
$('#logo').animate({color: getRandomColor, opacity: 0}, 1000, function(){
    $(this).animate({opacity: 1}, 1000);
    twitterLogo.style.color = getRandomColor;
    
});

$("#text").animate({color: getRandomColor, opacity: 0}, 1000, function(){
    $(this).animate({opacity: 1}, 1000);
    changeQuote.innerText =  arrOfQuotes[randNum][1];
    twitterLink.href = "https://twitter.com/intent/tweet?text=" +  encodeURIComponent(changeQuote.innerText + " " + changeAuthor.innerText);

});
}


newQuoteButton.addEventListener("click", function(){
    getNewQuote();
});