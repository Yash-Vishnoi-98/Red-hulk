import { useState } from "react";
import { Button } from "react-bootstrap";

const LanguageSelector = () => {
  const [lang, setLang] = useState("en");

  return (
    <div className="d-flex justify-content-end mb-3">
      <Button variant={lang === "en" ? "primary" : "secondary"} onClick={() => setLang("en")}>
        English
      </Button>
      <Button variant={lang === "hi" ? "primary" : "secondary"} onClick={() => setLang("hi")} className="ms-2">
        हिन्दी
      </Button>
    </div>
  );
};

export default LanguageSelector;
