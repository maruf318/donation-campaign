const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[60vh]"
        style={{
          background: "url(https://i.ibb.co/wJ1Q5Pj/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-[#0B0B0B] text-4xl font-bold">
              Helping People In Need
            </h1>

            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search here…"
                  className="input input-bordered w-[50vw] text-black"
                />
                <button className="btn capitalize btn-square px-12 bg-[#FF444A] text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
