import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllFlashCard from "./components/AllFlashCard";
import CardsCategory from "./components/Cards-Category";
import CardsByCategory from "./components/Get-Cards-By-Category";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-white h-screen">
      <Header />
      <CardsCategory />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllFlashCard />} />
          <Route path="/:category" element={<CardsByCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
