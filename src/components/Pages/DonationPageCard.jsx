import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationPageCard = ({ donation }) => {
  const {
    id,
    title,
    category,
    image,
    donation_amount,

    category_bg,
    card_bg,
    text_background,
  } = donation || {};
  return (
    <div className="max-w-7xl mx-auto px-2">
      <div
        className="relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border  shadow-md"
        style={{ backgroundColor: card_bg }}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border ">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6
            className="mb-4 block  w-fit px-2 py-1 rounded text-sm font-medium leading-relaxed tracking-normal antialiased"
            style={{ backgroundColor: category_bg, color: text_background }}
          >
            {category}
          </h6>
          <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased">
            {title}
          </h4>
          <p
            className="mb-2 block  text-base leading-relaxed font-semibold antialiased"
            style={{ color: text_background }}
          >
            ${donation_amount}
          </p>
          <Link to={`/card/${id}`}>
            <a className="inline-block">
              <button
                className="flex select-none items-center text-white gap-2 rounded-lg py-3 px-6 text-center align-middle text-lg font-bold "
                type="button"
                style={{ backgroundColor: text_background }}
              >
                View Details
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
DonationPageCard.propTypes = {
  donation: PropTypes.object,
};
export default DonationPageCard;
