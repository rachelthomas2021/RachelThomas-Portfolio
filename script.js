// TAB SWITCHING
const tabs = document.querySelectorAll(".nav li"); 
const sections = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// QUOTE HOVER
const quoteCard = document.querySelector('.card.quote');
const quoteText = document.getElementById('quote-text');

const quotes = [
  "“The only way to do great work is to love what you do.”",
  "“Dream big. Start small. Act now.”",
  "“Every day is a chance to be better than you were yesterday.”",
  "“Believe you can and you are halfway there.”",
  "“Everything has beauty, but not everyone sees it.”",
  "“Life is a book you write, not a movie you watch.”",
  "“In the end, it's not the years in your life that count. It's the life in your years.”",
  "“Every day is a chance to be better than you were yesterday. ”",
  "“Success is built on persistence and curiosity.”"
];

quoteCard.addEventListener('mouseenter', () => {
  let newQuote;
  do {
    newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (newQuote === quoteText.textContent);
  quoteText.textContent = newQuote;
});

quoteCard.addEventListener('mouseleave', () => {
  quoteText.textContent = quotes[0];
});



