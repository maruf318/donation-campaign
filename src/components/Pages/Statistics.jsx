import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Statistics = () => {
  const [donations, setDonations] = useState([]);
  const [donationAmount, setDonationAmount] = useState(0);
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("card"));
    if (donationItems) {
      setDonations(donationItems);
      const totalAmount = donationItems.reduce(
        (previous, current) => previous + current.donation_amount,
        0
      );
      setDonationAmount(totalAmount);
      // console.log(donationAmount);
    }
  }, [donationAmount]);
  const data = [
    { name: "Group A", value: 100 - 20 },
    { name: "Group B", value: 20 },
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
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-2">
      <div className="flex justify-center">
        <PieChart width={450} height={450}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="80%"
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
          <Legend></Legend>
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
