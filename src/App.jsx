import { Paper } from "./components/Paper/Paper";
import { Data } from "./store/Data";
function App() {
  return (
    <div className="App d-flex justify-content-center">
      <Paper Data={Data} />
    </div>
  );
}

export default App;
