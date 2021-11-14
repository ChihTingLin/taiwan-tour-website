import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/index";
import ScenicSpots from "./pages/scenicSpots/ScenicSpots";
import ScenicSpotDetail from "./pages/scenicSpots/ScenicSpotDetail";
import ActivityDetail from "./pages/activities/ActivityDetail";
import CityDetail from "./pages/city/CityDetail";
import Activities from "./pages/activities/Activities";
import RestaurantDetail from "./pages/restaurants/RestaurantDetail";
import Restaurants from "./pages/restaurants/Restaurants";
import "normalize.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scenic-spots" element={<ScenicSpots />} />
          <Route path="/scenic-spot/:ID" element={<ScenicSpotDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:ID" element={<ActivityDetail />} />
          <Route path="/city/:city" element={<CityDetail />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/restaurant/:ID" element={<RestaurantDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
