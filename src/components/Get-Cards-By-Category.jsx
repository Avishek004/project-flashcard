import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCardsByCategory } from "../lib/api/flashcard";
import CardsCategory from "./Cards-Category";
import Flashcard from "./Flashcard";

const CardsByCategory = () => {
  const { category } = useParams();

  const [cards, setCards] = useState();

  const cardsByCategory = () => {
    getCardsByCategory(category)
      .then((res) => {
        // console.log(res.data.data);
        setCards(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    cardsByCategory();
  }, [category]);

  return (
    <div className="flex flex-col gap-4 px-30 py-10">
      <div className="flex flex-row gap-3">
        <Link to="/" className="font-poppins text-2xl not-italic border-2 rounded-md border-dotted p-2">
          All
        </Link>
        <CardsCategory />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cards && cards.map((card) => <Flashcard question={card?.question} answer={card?.answer} key={card?.sn} />)}
      </div>
    </div>
  );
};

export default CardsByCategory;
