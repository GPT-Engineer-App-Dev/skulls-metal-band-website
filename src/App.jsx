import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TourDates from "./pages/TourDates.jsx";
import Discography from "./pages/Discography.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/tour" element={<TourDates />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
