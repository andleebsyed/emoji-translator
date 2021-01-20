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
      <h1 style={{ color: "purple" }}>Emoji translator app</h1>
      <input
        placeholder="Put an emoji here to know the meaning"
        onChange={inputChangeHandler}
        style={{ padding: "1rem", width: "80%" }}
      ></input>

      <div style={{ padding: "1rem", fontWeight: "bold" }}>{emojiMeaning}</div>

      <ul style={{ listStyle: "none" }}>
        {emojiArray.map(function (emoji, index) {
          return (
            <li
              key={index}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                cursor: "pointer",
                display: "inline",
                margin: "10px"
              }}
            >
              <span
                style={{
                  fontSize: "2rem",
                  padding: "0.5rem",
                  marginRight: "2rem",
                  marginInlineStart: "0px"
                }}
              >
                {emoji}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
