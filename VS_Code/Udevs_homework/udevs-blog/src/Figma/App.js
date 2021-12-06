import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Figma";
import Blogs from "./Axios/axios";
import Home2 from "./Home2";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path={"/blogs/:id"} element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
