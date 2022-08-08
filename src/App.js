// Components
import FirstComponent from "./Components/FirstComponent";
import SegundoComponent from "./Components/SegundoComponent";
import TemplateExpressions from "./Components/TemplateExpressions";
import MyComponents from "./Components/MyComponents";
import Events from "./Components/Events";
import city from "./assets/city.jpg"; // Import de IMG
import ListRender from "./Components/ListRender.js";
import ConditionalRender from "./Components/ConditionalRender.js";
import ShowUserName from "./Components/ShowUserName.js";
import { useState } from "react";
import CarDetails from "./Components/CarDetails.js";

// Style / CSS
import "./styles.css";
import ManageData from "./Components/ManageData";

export default function App() {
  const name = "Pedro";
  const [userName] = useState("Maria");

  const car = 
  [id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0],
  [id: 2, brand: "Kia", color: "Branco", newCar: false, km: 34343],
  [id: 1, brand: "Renault", color: "Azul", newCar: false, km: 10234],

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <img src="/img1.jpg" alt="Paisagem" /> {/* Import Img de Public*/}
      <img src={city} alt="Cidade" /> {/* Import Img de Assets*/}
      <FirstComponent />
      <SegundoComponent />
      <TemplateExpressions />
      <MyComponents />
      <Events />
      <ManageData />
      {/* Render*/}
      <ListRender />
      <ConditionalRender />
      {/* Props*/}
      <ShowUserName name={userName} /> {/* Props com useState*/}
      <ShowUserName name={name} /> {/* Props puxando de uma const*/}
      {/* Destructuring*/}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
       {/* Reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Preto" newCar={false} />
      
      {/* Loop em Array de Objetos*/}
      {car.map((car) => (
        <CarDatails
        brand={car.band}
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))}
    </div>
  );
}
