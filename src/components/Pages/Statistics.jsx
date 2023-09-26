import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const [donations, setDonations] = useState(0);

  const [donationAmount, setDonationAmount] = useState(0);
  const donationCards = useLoaderData();
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("card"));

    setDonations(donationCards.length);
    if (donationItems) {
      setDonationAmount(donationItems.length);
    }
  }, [donationCards.length]);

  const data = [
    {
      name: "Total Donation",
      value: donations - donationAmount,
    },
    { name: "Your Donation", value: donationAmount },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={"18px"}
        fontWeight="700"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="70%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="text-center flex justify-center gap-4 mb-6">
        <div className="flex gap-4  md:flex-row flex-col">
          <p className="text-[#0B0B0B] text-lg">Your Donation</p>
          <p className="w-12 lg:w-24 justify-center items-center rounded-sm h-3 mt-2 bg-[#00C49F]"></p>
        </div>
        <div className="flex  gap-4 md:flex-row flex-col">
          <p className="text-[#0B0B0B] text-lg">Total Donation</p>
          <p className="w-12 lg:w-24 justify-center items-center rounded-sm h-3 mt-2 bg-[#FF444A]"></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
