import { CivicAPIData } from "./dataType";
import { useState, useEffect } from "react";

function Retriever(): CivicAPIData {
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBEhstCgYZewz3HlAldtxVVIawMqMX5ONI&address=136%Miller%20Street%20Strasburg%20PA"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        JSON.parse(JSON.stringify(figures));
        setFigures(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return JSON.parse(JSON.stringify(figures));
}

export default Retriever;
