import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

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
  const handleDonateButton = () => {
    const data = [];
    const storedData = JSON.parse(localStorage.getItem("card"));
    if (!storedData) {
      data.push(card);
      localStorage.setItem("card", JSON.stringify(data));
      Swal.fire("Success", "Your donation is added", "success");
    } else {
      const isExits = storedData.find((card) => card.id == id);
      if (!isExits) {
        data.push(...storedData, card);
        localStorage.setItem("card", JSON.stringify(data));
        Swal.fire("Success", "your Donation is added", "success");
      } else {
        // alert("duplicate");
        Swal.fire(
          "Alert!",
          "You already added this donation. Donate in another category",
          "error"
        );
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-2">
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
        <div className=" absolute left-10 -bottom-6 lg:left-40 lg:bottom-[70px]">
          <button
            onClick={handleDonateButton}
            className="text-white text-xl font-semibold p-4 rounded"
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
