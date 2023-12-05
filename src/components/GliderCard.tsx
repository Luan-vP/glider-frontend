import { useState, useEffect } from "react";
import axios from "axios";

function GliderCard(): JSX.Element {
  const [glider, setGlider] = useState("");
  const [gliderImage, setGliderImage] = useState("");
  const [gliderFitness, setGliderFitness] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3300/vehicle").then((response: any) => {
      setGlider(() => response.data);
      // console.log(response.data)
      console.log(glider);
      getGliderImage(response.data);
      getGliderFitness(response.data);
    });
  }, []);

  let getGliderImage = (g: any) => {
    axios
      .post("http://localhost:3300/vehicle/view", g)
      .then((response: any) => {
        setGliderImage(() => response.data.data);
      });
  };

  let getGliderFitness = (g: any) => {
    axios
      .post("http://localhost:3300/vehicle/fitness", g)
      .then((response: any) => {
        setGliderFitness(() => response.data);
      });
  };

  return (
    <>
      <div className="card">
        <img src={"data:image/png;base64," + gliderImage} />
        <p>Fitness: {gliderFitness}</p>
      </div>
    </>
  );
}

export default GliderCard;
