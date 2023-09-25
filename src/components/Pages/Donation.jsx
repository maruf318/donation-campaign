import { useEffect, useState } from "react";
import DonationPageCard from "./DonationPageCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNofound] = useState(false);
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("card"));
    if (storedData) {
      setDonations(storedData);
    } else {
      setNofound("No Data Found");
    }
  }, []);

  return (
    <div className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {donations.map((donation) => (
          <DonationPageCard
            key={donation.id}
            donation={donation}
          ></DonationPageCard>
        ))}
      </div>
    </div>
  );
};

export default Donation;
