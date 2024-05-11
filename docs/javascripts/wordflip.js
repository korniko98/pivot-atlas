const dynamicWordContainer = document.getElementById('dynamic-word-container');
const indefiniteArticle = document.getElementById('indefinite-article');
const dynamicWord = document.getElementById('dynamic-word');
const fixedText = document.getElementById('fixed-text');
const wordList = document.getElementById('word-list').textContent.split(',').map(word => word.trim());
let maxLength = Math.max(...wordList.map(word => word.length));
let index = 0;

// Set the width of the dynamic word container based on the length of the longest word
dynamicWordContainer.style.width = (maxLength * 13) + 'px'; // Adjust the multiplier as needed

// Function to determine if a word starts with a vowel
function startsWithVowel(word) {
  return ['a', 'e', 'i', 'o'].includes(word.charAt(0).toLowerCase());
}

function flipWords() {
  dynamicWord.textContent = wordList[index];
  indefiniteArticle.textContent = startsWithVowel(wordList[index]) ? 'an ' : 'a ';
  index = (index + 1) % wordList.length;
}

// Initial call
flipWords();

// Set interval to change words
setInterval(flipWords, 2500); // Change the interval time to match the animation duration
