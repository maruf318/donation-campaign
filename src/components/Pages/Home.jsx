import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Cards from "./Cards";

const Home = () => {
  const donationCards = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Cards donationCards={donationCards}></Cards>
    </div>
  );
};

export default Home;
