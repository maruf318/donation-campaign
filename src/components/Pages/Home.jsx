import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [test, setTest] = useState([]);
  // const [filterCard, SetfilterCard] = useState([]);

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
    // setTest(data);
  }, [donationCards, searchInput]);
  console.log(test);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.searchName.value);
    // };
  };
  // console.log(searchInput);

  // console.log(donationCards);
  return (
    <div className="">
      <Banner
        handleSearch={handleSearch}
        donationCards={donationCards}
      ></Banner>
      <Cards donationCards={test}></Cards>
    </div>
  );
};

export default Home;
