import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allCards } from "../lib/api/flashcard";

const CardsCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState();

  const getCategoryOfCards = () => {
    allCards()
      .then((res) => {
        // console.log(res.data.data);
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getCategoryOfCards();
  }, []);

  const uniqueIds = [];

  const uniqueCategories = categories?.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.category);

    if (!isDuplicate) {
      uniqueIds.push(element.category);
      return true;
    }
    return false;
  });

  console.log(uniqueCategories, uniqueIds);

  return (
    <div className="flex flex-row gap-3">
      {uniqueIds &&
        uniqueIds.map((uniqueId, index) => (
          <div
            onClick={() => navigate(`/${uniqueId}`)}
            className="font-poppins text-2xl not-italic border-2 rounded-md border-dotted p-2"
            key={index}
          >
            {uniqueId}
          </div>
        ))}
    </div>
  );
};

export default CardsCategory;
