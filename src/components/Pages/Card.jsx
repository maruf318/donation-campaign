import { Link } from "react-router-dom";

const Card = ({ card }) => {
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
  } = card || {};
  return (
    <div>
      <Link to={`/card/${id}`}>
        <div
          className="card h-[283px] m-2 lg:m-0 card-compact shadow-xl"
          style={{ backgroundColor: card_bg }}
        >
          <figure>
            <img src={image} alt="Card" />
          </figure>
          <div className="card-body ">
            <p
              className="card-title w-fit px-2 py-1 rounded text-sm font-medium"
              style={{ backgroundColor: category_bg, color: text_background }}
            >
              {category}{" "}
            </p>
            <p
              className="text-xl font-semibold"
              style={{ color: text_background }}
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
