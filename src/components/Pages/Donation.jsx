import { useEffect, useState } from "react";
import DonationPageCard from "./DonationPageCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  // const [notFound, setNotfound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("card"));
    if (storedData) {
      setDonations(storedData);
    }
    // else {
    //   setNotfound("No Data Found");
    // }
  }, []);

  return (
    <div className="my-6 max-w-7xl mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {isShow
          ? donations.map((donation) => (
              <DonationPageCard
                key={donation.id}
                donation={donation}
              ></DonationPageCard>
            ))
          : donations
              .slice(0, 4)
              .map((donation) => (
                <DonationPageCard
                  key={donation.id}
                  donation={donation}
                ></DonationPageCard>
              ))}
      </div>
      {donations.length > 4 && (
        <button
          onClick={() => setIsShow(!isShow)}
          className="mt-8 bg-[#009444] font-semibold py-3 px-6 text-white rounded-lg block mx-auto"
        >
          {isShow ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

export default Donation;
