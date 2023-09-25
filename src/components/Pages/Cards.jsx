import Card from "./Card";

const Cards = ({ donationCards }) => {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 my-10">
        {donationCards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
