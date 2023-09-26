import PropTypes from "prop-types";
const Banner = ({ handleSearch }) => {
  return (
    <div className="mb-2 md:mb-7 ">
      <div
        className="hero h-[60vh]"
        style={{
          background: "url(https://i.ibb.co/wJ1Q5Pj/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl ">
            <h1 className="mb-5 text-[#0B0B0B] text-3xl lg:text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>

            <div className="form-control ml-12 md:ml-0 ">
              <div className="input-group  ">
                <form
                  className="flex mx-auto"
                  onSubmit={(e) => {
                    handleSearch(e);
                  }}
                >
                  <input
                    type="text"
                    name="searchName"
                    placeholder="Search here…"
                    className=" rounded-l-lg w-[60vh] border border-[#DEDEDE] p-4 lg:w-[25vw] text-black"
                  />
                  <input
                    className="capitalize text-base font-semibold py-4 rounded-r-lg  px-6 bg-[#FF444A] text-white"
                    type="submit"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.propTypes = {
  handleSearch: PropTypes.func,
};
export default Banner;
