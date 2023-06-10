import Form from "./Form";
import Weather from "./Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="container bg-dark text-light">
      <hr />
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
      <hr />
    </div>
  );
}

export default Main;
