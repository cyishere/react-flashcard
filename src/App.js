/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: Chen Yang
 * @Date: 2020-10-05 11:06:15
 * @Last Modified by: Chen Yang
 * @Last Modified time: 2020-10-05 12:41:43
 */
import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import DrawButton from "./components/DrawButton";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      eng: "bird",
      kanji: "鳥",
      kana: "とり",
    },
    {
      id: 2,
      eng: "box",
      kanji: "箱",
      kana: "はこ",
    },
    {
      id: 3,
      eng: "to meet",
      kanji: "会う",
      kana: "	あう",
    },
    {
      id: 4,
      eng: "blue",
      kanji: "青い",
      kana: "あおい",
    },
    {
      id: 5,
      eng: "autumn",
      kanji: "秋",
      kana: "あき",
    },
  ]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    getRandomCard(cards);
  }, []);

  const getRandomCard = (currentCards) => {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    setCurrentCard(card);
  };

  const handleDrawCard = () => {
    getRandomCard(cards);
  };

  return (
    <div className="container">
      <Card card={currentCard} />
      <DrawButton handleDrawCard={handleDrawCard} />
    </div>
  );
}

export default App;
