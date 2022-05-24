import "./App.scss";
import { Product } from "./components/Product";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Product />
      <About />
    </div>
  );
}

export default App;
