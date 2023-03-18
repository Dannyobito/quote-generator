const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

//Show loader
const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};
const complete = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

//Show new Quote randomly
const newQuote = () => {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //Check quote length for styling
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;

  //Check if author is blank
  if (quote.author == null) {
    authorText.textContent = "Some guy";
  } else {
    authorText.textContent = quote.author;
  }
  // Loading complete, hide loader
  complete();
};

// Get quotes from API
loading();
const getQuotes = async () => {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
};

//Tweet Quote

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};
//Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//

// On load
getQuotes();
