// import { State } from "./hooks/State";
import { Context } from "./hooks/Context";
import { Books } from "./components/Books";

function App() {
  return (
    <Context>
      <Books />
    </Context>
  );
}

export default App;
