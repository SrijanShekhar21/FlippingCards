import React, { useState } from "react";

function FlipCard() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [english, setEnglish] = useState("Hello, how are you?");
  const [chinese, setChinese] = useState("你好吗？ (Nǐ hǎo ma?)");
  return (
    <div className="flipCard">
      <div className={`flipContent ${isEnglish ? "flipped" : ""}`}>
        <div className="flipFront">
          <h3 className="flipLanguage">English</h3>
          <p className="flipText">{english}</p>
        </div>
        <div className="flipBack">
          <h3 className="flipLanguage">Chinese</h3>
          <p className="flipText">{chinese}</p>
        </div>
      </div>

      <p
        onMouseOver={() => setIsEnglish(!isEnglish)}
        onMouseOut={() => setIsEnglish(!isEnglish)}
        className="hoverToTrans"
      >
        {!isEnglish
          ? "Translate"
          : `翻译
(Fānyì)`}
      </p>
    </div>
  );
}

export default FlipCard;
