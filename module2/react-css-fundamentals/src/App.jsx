import "./App.css";
import CssModules from "./CssModules";
import CssInJs from "./StyledComponent";
import TailWind from "./Tailwind";

const App = () => {
  return (
    <div className="primary">
      <p>Hello World.</p>
      <CssModules />
      <CssInJs />
      <TailWind />
    </div>
  );
}

export default App;
