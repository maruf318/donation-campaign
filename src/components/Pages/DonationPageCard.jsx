const DonationPageCard = ({ donation }) => {
  const {
    id,
    title,
    category,
    image,
    donation_amount,
    description,
    category_bg,
    card_bg,
    text_background,
  } = donation || {};
  return (
    <div>
      <div
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md"
        style={{ backgroundColor: card_bg }}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6
            className="mb-4 block font-sans w-fit px-2 py-1 rounded text-sm font-medium leading-relaxed tracking-normal antialiased"
            style={{ backgroundColor: category_bg, color: text_background }}
          >
            {category}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
            {title}
          </h4>
          <p
            className="mb-2 block font-sans text-base leading-relaxed font-semibold antialiased"
            style={{ color: text_background }}
          >
            ${donation_amount}
          </p>
          <a className="inline-block" href="#">
            <button
              className="flex select-none items-center text-white gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold "
              type="button"
              style={{ backgroundColor: text_background }}
            >
              View Details
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationPageCard;
