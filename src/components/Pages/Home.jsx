import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [test, setTest] = useState([]);

  const donationCards = useLoaderData();
  useEffect(() => {
    const data = donationCards.filter(
      (card) => card.category.toLowerCase() == searchInput.toLowerCase()
    );
    if (test) {
      if (searchInput) {
        setTest(data);
      } else {
        setTest(donationCards);
      }
    }
  }, [donationCards, searchInput, test]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.searchName.value);
  };

  return (
    <div className="">
      <Banner handleSearch={handleSearch}></Banner>
      <Cards donationCards={test}></Cards>
    </div>
  );
};

export default Home;
