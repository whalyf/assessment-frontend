import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/molecules/Header";
import { RouteApp } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteApp />
    </BrowserRouter>
  );
}

export default App;
