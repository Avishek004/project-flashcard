import axios from "axios";

export const allCards = () => {
  return axios.get("http://36.255.69.58:5000/api/v1/flashcards/card/allcards", {
    headers: { "Content-Type": "application/json" },
  });
};

export const getCardsByCategory = (category) => {
  return axios.get(`http://36.255.69.58:5000/api/v1/flashcards/card/category/${category}`, {
    headers: { "Content-Type": "application/json" },
  });
};

export const getCardByUid = (uid) => {
  return axios.get(`http://36.255.69.58:5000/api/v1/flashcards/card/:${uid}`, {
    headers: { "Content-Type": "application/json" },
  });
};
