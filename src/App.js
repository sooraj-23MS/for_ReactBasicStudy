import { MainComponent } from "./Components/MainComponent";
import MainConditionalRendering from "./ConditionalRendering/MainConditionalRendering";
import { MainStateProps } from "./State&Props/MainStateProps";

function App() {
  return (
    <div className="App" style={{textAlign : "center"}}>
      <MainComponent/>
      <MainStateProps/>
      <MainConditionalRendering/>
    </div>
  );
}

export default App;
