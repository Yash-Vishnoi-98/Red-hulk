import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const Dashboard = ({ crop, region }) => {
  const [data, setData] = useState({
    mandiPrice: null,
    weather: null,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch Mandi Price
        const priceRes = await axios.get("http://localhost:5000/prices", {
          params: { crop, region },
        });

        // Fetch Weather Data
        const weatherRes = await axios.get("http://localhost:5000/weather", {
          params: { region },
        });

        setData({
          mandiPrice: priceRes.data.price || "Price not available",
          weather: weatherRes.data || { temp: "N/A", condition: "N/A" },
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, [crop, region]);

  return (
    <div className="mt-4">
      <h2 className="text-success text-center">📊 Dashboard</h2>

      {/* Mandi Price */}
      <div className="alert alert-warning mt-3">
        <h5>💰 Mandi Price</h5>
        {data.mandiPrice ? (
          <p>
            {crop} in {region}: <strong>{data.mandiPrice}</strong>
          </p>
        ) : (
          <Spinner animation="border" size="sm" />
        )}
      </div>

      {/* Weather Data */}
      <div className="alert alert-info mt-3">
        <h5>🌤 Weather Update</h5>
        {data.weather ? (
          <p>
            {region}: <strong>{data.weather.temp}°C</strong>, {data.weather.condition}
          </p>
        ) : (
          <Spinner animation="border" size="sm" />
        )}
      </div>
    </div>
  );
};

export default Dashboard;