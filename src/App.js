import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "🤣": "Rolling on the floor laughing",
  "😂": "Face with tears of joy",
  "🤩": "Star-Struck",
  "🤡": "Clown-Face",
  "🦄": "Unicorn",
  "🦖": "T-Rex",
  "💎": "Gem-Stone",
  "🪔": "Diya Lamp"
};

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Translation will come here: "
  );
  var emojiArray = Object.keys(emojiDictionary);

  function inputChangeHandler(event) {
    var inputEmoji = event.target.value;
    if (inputEmoji in emojiDictionary) {
      var emojiMeaning = emojiDictionary[inputEmoji];
    } else {
      emojiMeaning = "Sorry! This emoji is not in our database";
    }

    setEmojiMeaning(emojiMeaning);
  }

  function emojiClickHandler(inputEmoji) {
    setEmojiMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <input
        onChange={inputChangeHandler}
        style={{ padding: "1rem", width: "80%" }}
      ></input>

      <div style={{ padding: "1rem", fontWeight: "bold" }}>{emojiMeaning}</div>

      <ul style={{ listStyle: "none" }}>
        {emojiArray.map(function (emoji) {
          return (
            <li
              onClick={() => emojiClickHandler(emoji)}
              style={{ cursor: "pointer", display: "inline", margin: "8px" }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
