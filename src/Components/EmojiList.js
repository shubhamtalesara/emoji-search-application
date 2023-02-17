import React from 'react'

export default function EmojiList(props) {
    const emojis= [
        {
          "title": "100",
          "symbol": "💯",
          "keywords":
            "hundred points symbol symbol wow wow win win perfect perfect parties parties"
        },
        {
          "title": "1234",
          "symbol": "🔢",
          "keywords": "input symbol for numbers symbol"
        },
        {
          "title": "Grinning",
          "symbol": "😀",
          "keywords": "grinning face happy smiley emotion emotion"
        },
        {
          "title": "Grimacing",
          "symbol": "😬",
          "keywords": "grimacing face silly smiley emotion emotion selfie selfie"
        },
        {
          "title": "Grin",
          "symbol": "😁",
          "keywords":
            "grinning face with smiling eyes happy silly smiley emotion emotion good good selfie selfie"
        },
        {
          "title": "Joy",
          "symbol": "😂",
          "keywords":
            "face with tears of joy happy silly smiley cry laugh laugh emotion emotion sarcastic sarcastic"
        },
        {
          "title": "Smiley",
          "symbol": "😃",
          "keywords":
            "smiling face with open mouth happy smiley emotion emotion good good"
        },
        {
          "title": "Smile",
          "symbol": "😄",
          "keywords":
            "smiling face with open mouth and smiling eyes happy smiley emotion emotion"
        },
        {
          "title": "Sweat Smile",
          "symbol": "😅",
          "keywords":
            "smiling face with open mouth and cold sweat smiley workout sweat emotion emotion"
        },
        {
          "title": "Laughing",
          "symbol": "😆",
          "keywords":
            "smiling face with open mouth and tightly-closed eyes happy smiley laugh laugh emotion emotion"
        },
        {
          "title": "Innocent",
          "symbol": "😇",
          "keywords": "smiling face with halo smiley emotion emotion"
        },
        {
          "title": "Wink",
          "symbol": "😉",
          "keywords": "winking face silly smiley emotion emotion"
        },
        {
          "title": "Blush",
          "symbol": "😊",
          "keywords":
            "smiling face with smiling eyes happy smiley emotion emotion good good beautiful beautiful"
        },
        {
          "title": "Slight Smile",
          "symbol": "🙂",
          "keywords": "slightly smiling face happy smiley"
        },
        {
          "title": "Upside Down",
          "symbol": "🙃",
          "keywords": "upside-down face silly smiley sarcastic sarcastic"
        },
        {
          "title": "Relaxed",
          "symbol": "☺",
          "keywords": "white smiling face happy smiley"
        },
        {
          "title": "Yum",
          "symbol": "😋",
          "keywords":
            "face savouring delicious food happy silly smiley emotion emotion sarcastic sarcastic good good"
        },
        {
          "title": "Relieved",
          "symbol": "😌",
          "keywords": "relieved face smiley emotion emotion"
        },]
  return (
    <div>
      {emojis.filter(item =>{
        const searchTerm= props.value.toLowerCase()
        const emojiTitle= item.title.toLowerCase();
        const emojikeywords= item.keywords.toLowerCase();

        return props.value && (emojiTitle.startsWith(searchTerm) || emojikeywords.includes(searchTerm))
      }).map((item)=>
      <div>
        <p>{item.symbol} {item.title}</p>
        </div>
      )}
    </div>
  )
}
