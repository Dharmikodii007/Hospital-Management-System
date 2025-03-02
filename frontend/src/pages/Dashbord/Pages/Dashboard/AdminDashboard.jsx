import React from "react";
import StatsCard from "../../../../component/StatsCard/StatsCard";
import { MdFace, MdPeople, MdShoppingCart } from "react-icons/md";
import useDayWiseData from "../../../../component/ChartData/DayWiseData";

const Dashboard = () => {
  const appointmentsData = [61, 80, 50, 72, 52, 60, 41, 30, 63, 40, 93, 63, 53];
  const usersData = [30, 45, 35, 70, 85, 55, 90, 50, 66, 77];
  const salesData = [40, 20, 30, 40, 50, 60, 70, 90, 100];

  const { labels, values } = useDayWiseData(); // ✅ Get processed data
  console.log(values);

  return (
    <div className="md:h-[100vh] bg-[#232B3E]">
      <div className="w-full md:grid md:grid-cols-4 flex flex-col gap-4 p-4">
        <StatsCard
          title="Appointments"
          value="650"
          icon={MdFace}
          chartData={values}
          bgColor="bg-[#1a202e]"
          iconBg="bg-[#6f42c1]"
        />

        <StatsCard
          title="Users"
          value="1,250"
          icon={MdPeople}
          chartData={usersData}
          bgColor="bg-[#1a202e]"
          iconBg="bg-[#ff5722]"
        />

        <StatsCard
          title="Sales"
          value="$12,500"
          icon={MdShoppingCart}
          chartData={salesData}
          bgColor="bg-[#1a202e]"
          iconBg="bg-[#4caf50]"
        />

        <StatsCard
          title="Users"
          value="1,250"
          icon={MdPeople}
          chartData={usersData}
          bgColor="bg-[#1a202e]"
          iconBg="bg-[#ff5722]"
        />
      </div>
    </div>
  );
};

export default Dashboard;
