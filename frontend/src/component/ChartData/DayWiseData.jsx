import { useState, useEffect } from "react";
import { AllAppoinment } from "../../Api/AppointmentApi";
import useFetchData from "../../hooks/useFetchData";

const useDayWiseData = () => {
  const [chartData, setChartData] = useState({ labels: [], values: [] });
  const { data: Appointments, loading } = useFetchData(AllAppoinment);

  useEffect(() => {
    if (!Appointments || Appointments.length === 0 || loading) return;

    const dayCounts = Appointments.reduce((acc, item) => {
      if (!item.date_of_appointment) return acc; // Skip invalid dates

      const date = new Date(item.date_of_appointment)
        .toISOString()
        .split("T")[0]; // Extract YYYY-MM-DD
      acc[date] = (acc[date] || 0) + 1; // Count occurrences
      return acc;
    }, {});

    // Convert object to arrays for Chart.js
    const labels = Object.keys(dayCounts);
    const values = Object.values(dayCounts);

    setChartData({ labels, values });
  }, [Appointments, loading]); // ✅ Depend on `Appointments` and `loading`

  return chartData;
};

export default useDayWiseData;
