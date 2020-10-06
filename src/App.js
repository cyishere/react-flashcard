/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: Chen Yang
 * @Date: 2020-10-05 11:06:15
 * @Last Modified by: Chen Yang
 * @Last Modified time: 2020-10-06 13:53:56
 */
import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import DrawButton from "./components/DrawButton";

import { database } from "./config/firebase";

function App() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    const initialCards = cards;

    database.on("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        initialCards.push({
          id: childSnapshot.key,
          eng: childSnapshot.val().eng,
          kanji: childSnapshot.val().kanji,
          kana: childSnapshot.val().kana,
        });

        if (initialCards.length === snapshot.numChildren()) {
          setCards(initialCards);
          getRandomCard(cards);
        }
      });
    });
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
