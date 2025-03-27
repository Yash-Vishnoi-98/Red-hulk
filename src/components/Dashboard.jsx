import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Dashboard = ({ crop, region }) => {
  const [data, setData] = useState({
    mandiPrice: null,
    weather: null,
    cropTips: [],
  });

  useEffect(() => {
    // Simulated API Calls (Replace with real API)
    setTimeout(() => {
      setData({
        mandiPrice: `₹${Math.floor(Math.random() * 5000) + 1000} per quintal`,
        weather: { temp: Math.floor(Math.random() * 10) + 20, condition: "Sunny" },
        cropTips: [
          "Use organic fertilizers.",
          "Monitor for pests regularly.",
          "Water the crop as per seasonal needs.",
        ],
      });
    }, 1000);
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

      {/* Weather */}
      <div className="alert alert-info mt-3">
        <h5>🌦 Weather Forecast</h5>
        {data.weather ? (
          <p>
            Temperature: <strong>{data.weather.temp}°C</strong> | Condition:{" "}
            <strong>{data.weather.condition}</strong>
          </p>
        ) : (
          <Spinner animation="border" size="sm" />
        )}
      </div>

      {/* Crop Care Tips */}
      <div className="alert alert-success mt-3">
        <h5>🌱 Crop Care Tips</h5>
        <ul>
          {data.cropTips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};