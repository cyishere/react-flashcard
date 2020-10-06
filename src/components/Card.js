/*
 * @Author: Chen Yang
 * @Date: 2020-10-05 11:06:17
 * @Last Modified by: Chen Yang
 * @Last Modified time: 2020-10-06 13:31:13
 */
import React from "react";

const Card = ({ card }) => {
  if (!card) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    document.querySelector(".front").classList.toggle("none");
    document.querySelector(".back").classList.toggle("none");
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className="card">
        <div className="front">
          <div className="eng">{card.eng}</div>
        </div>

        <div className="back">
          <div className="kanji">{card.kanji}</div>
          <div className="kana">{card.kana}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
