// Components
import FirstComponent from "./Components/FirstComponent";
import SegundoComponent from "./Components/SegundoComponent";
import TemplateExpressions from "./Components/TemplateExpressions";
import MyComponents from "./Components/MyComponents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <SegundoComponent />
      <TemplateExpressions />
      <MyComponents />
      
    </div>
  );
}
