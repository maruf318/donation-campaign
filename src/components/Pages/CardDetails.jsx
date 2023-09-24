import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cardsData = useLoaderData();
  const { id } = useParams();
  console.log(cardsData, id);
  const card = cardsData.find((card) => card.id == id);
  console.log(card);
  const {
    title,
    category,
    image,
    donation_amount,
    description,
    category_bg,
    card_bg,
    text_background,
  } = card || {};

  return (
    <div>
      <div>
        <div className="relative">
          <div className="w-full h-[80vh] rounded-xl relative">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={image}
              alt=""
            />
            <div className="absolute bottom-0 w-full lg:h-1/5 bg-[#0B0B0B80] opacity-90 rounded-lg"></div>
          </div>
        </div>
        <div className=" absolute left-10 -bottom-6 lg:left-40 lg:bottom-20">
          <button
            className="text-white p-4 rounded"
            style={{ backgroundColor: text_background }}
          >
            Donate ${donation_amount}{" "}
          </button>
        </div>
        <h2 className="text-[#0B0B0B] my-6 text-4xl font-bold ">{title}</h2>
        <p className="text-[#0B0B0BB3] mb-6 p-2 lg:p-0">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
