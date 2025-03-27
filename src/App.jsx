import { useState } from "react";
import Dashboard from "./components/Dashboard";
import InputForm from "./components/InputForm";
import LanguageSelector from "./components/LanguageSelector";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [crop, setCrop] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center text-success mb-3">
          🌱 Personalized Farming Dashboard
        </h1>

        <LanguageSelector />

        <InputForm setCrop={setCrop} setRegion={setRegion} />

        {crop && region && <Dashboard crop={crop} region={region} />}
      </div>
    </div>
  );
}

export default App;
