const emojiStory = document.querySelector("#emoji-story");
const generateStoryButton = document.querySelector("#generate-story-btn");
const storyInputForm = document.querySelector("#storyInputForm");
const storyLengthInput = document.querySelector("#story-length-input");
const descriptionInput = document.querySelector("#description-input");
const storyDescritionForm = document.querySelector("#storyDescriptionForm");
const historyUl = document.querySelector("#historyUl");
const historyTitle = document.querySelector("#history-title");
let storyCounter = 0;

storyInputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let emojiString = "";
  const numberOfEmojis = storyLengthInput.value;

  for (let i = 0; i < numberOfEmojis; i++) {
    emojiString += emojis[Math.floor(Math.random() * emojis.length)];
  }
  emojiStory.innerText = `Story: ${emojiString}`;
});

storyDescritionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let emojiString = "";
  const numberOfEmojis = storyLengthInput.value;

  for (let i = 0; i < numberOfEmojis; i++) {
    emojiString += emojis[Math.floor(Math.random() * emojis.length)];
  }
  emojiStory.innerHTML = `Story: ${emojiString}`;

  const newStory = document.createElement("li");
  newStory.innerHTML = `${emojiStory.innerHTML} ${descriptionInput.value}`;
  historyUl.appendChild(newStory);
  storyCounter++;

  if (storyCounter > 1) {
    historyTitle.innerHTML = `${storyCounter} Saved Stories`;
  } else {
    historyTitle.innerHTML = `${storyCounter} Saved Story`;
  }
});
