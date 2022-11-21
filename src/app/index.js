import { BrowserRouter } from "react-router-dom";
import AdminRouter from "../pages/admin/router";
import SiteRouter from "../pages/site/router";

import "./styles/normalize.scss"
import "./styles/STYLES.scss"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteRouter/>
        <AdminRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App