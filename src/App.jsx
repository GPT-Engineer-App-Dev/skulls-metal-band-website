import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TourDates from "./pages/TourDates.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/tour" element={<TourDates />} />
      </Routes>
    </Router>
  );
}

export default App;
