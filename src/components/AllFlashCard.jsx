import { useEffect, useState } from "react";
import { allCards } from "../lib/api/flashcard";
import Flashcard from "./Flashcard";

const AllFlashCard = () => {
  const [cards, setCards] = useState();
  const getAllFlashCards = () => {
    allCards()
      .then((res) => {
        console.log(res.data.data);
        setCards(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getAllFlashCards();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards && cards.map((card) => <Flashcard question={card?.question} answer={card?.answer} key={card?.sn} />)}
    </div>
  );
};

export default AllFlashCard;
