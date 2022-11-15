import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Layout from "./layout/Index";

import Home from "./pages/Index";

function App() {
  return (
    <div className="main-content">
      <Layout />
      <Home />
    </div>
  );
}

export default App;
