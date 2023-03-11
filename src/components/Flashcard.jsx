import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Flashcard = ({ question, answer }) => {
  const [state, setState] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setState(!state);
  };

  return (
    <>
      <ReactCardFlip isFlipped={state}>
        <div onClick={(e) => handleClick(e)} className="rounded shadow-lg">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2 text-center">{question}</p>
          </div>
        </div>
        <div onClick={(e) => handleClick(e)} className="rounded shadow-lg">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2 text-justify">{answer}</p>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default Flashcard;
