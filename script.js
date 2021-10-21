const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


// Get quotes from API
let apiQuotes = [];

// Show New QUote
function newQuote() {
    // Pick a random quote from API quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    authorText.textContent = quote.author;
    // Check if Author field is blank and replace it with unknown
    if (!quote.author) {
        authorText.textContent = "Unknown"
    } else {
        quoteText.textContent = quote.text;    
    }

    // Check quote length to determine the styling.
    if (quote.text.length > 50) {
        quoteText.classList.add("long-quote")
    } else {
        quoteText.classList.remove("long-quote")
    } 
    quoteText.textContent = quote.text;
}

async function getQuotes () {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        
        // Catch Error
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event lister

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
// on Load
getQuotes();