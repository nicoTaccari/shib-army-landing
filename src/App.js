import "./App.css";
import { Controller, Scene } from "react-scrollmagic";
import Header from "./components/header/index";

function App() {
  return (
    <div>
      <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
        <Scene pin>
          <div className="panel">
            <Header />
          </div>
        </Scene>
        <Scene pin>
          <div className="panel turqoise">
            <span>Panel</span>
          </div>
        </Scene>
        <Scene pin>
          <div className="panel green">
            <span>Panel</span>
          </div>
        </Scene>
        <Scene pin>
          <div className="panel bordeaux">
            <span>Panel</span>
          </div>
        </Scene>
      </Controller>
    </div>
  );
}

export default App;
