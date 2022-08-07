// Components
import FirstComponent from "./Components/FirstComponent";
import SegundoComponent from "./Components/SegundoComponent";
import TemplateExpressions from "./Components/TemplateExpressions";
import MyComponents from "./Components/MyComponents";
import Events from "./Components/Events";
import city from "./assets/city.jpg"; // Import de IMG
import ListRender from "./Components/ListRender.js";
import ConditionalRender from "./Components/ConditionalRender.js";

// Style / CSS
import "./styles.css";
import ManageData from "./Components/ManageData";

export default function App() {
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
      <ListRender />
      <ConditionalRender />
    </div>
  );
}
