import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/index";
import Attractions from "./pages/attractions/Attractions";
import AttractionDetail from "./pages/attractions/attractionDetail/AttractionDetail";
import ActivityDetail from "./pages/activities/activityDetail/ActivityDetail";
import CityDetail from "./pages/city/CityDetail";
import "normalize.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/attraction/:ID" element={<AttractionDetail />} />
          <Route path="/activity/:ID" element={<ActivityDetail />} />
          <Route path="/city/:city" element={<CityDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
