/*
 * @Author: Chen Yang
 * @Date: 2020-10-05 11:06:17
 * @Last Modified by: Chen Yang
 * @Last Modified time: 2020-10-05 12:31:08
 */
import React from "react";

const Card = ({ card }) => {
  if (!card) {
    return <div>Loading...</div>;
  }
  return (
    <div className="card-container">
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
