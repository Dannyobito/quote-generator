const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("author");
const newQuoteBtn = document.getElementById("author");

let apiQuotes = [];

//Assign quotes randomly
const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //Check if author is blank
  if (!quote.author) {
    quoteAuthor.textContent = "Some guy";
  } else {
    quoteAuthor.textContent = quote.author;
  }

  //Styling for long text

  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
};

//Fetch Quores from the API
const getQuotes = async () => {
  const apiLink = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiLink);
    apiQuotes = await response.json();
    newQuote();
  } catch (e) {
    alert("Error");
  }
};

//On load
getQuotes();
