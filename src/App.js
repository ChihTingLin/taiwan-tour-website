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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={process.env.PUBLIC_URL} element={<Home />} />
          <Route path={`${process.env.PUBLIC_URL}/scenic-spots`} element={<ScenicSpots />} />
          <Route path={`${process.env.PUBLIC_URL}/scenic-spot/:ID`} element={<ScenicSpotDetail />} />
          <Route path={`${process.env.PUBLIC_URL}/activities`} element={<Activities />} />
          <Route path={`${process.env.PUBLIC_URL}/activity/:ID`} element={<ActivityDetail />} />
          <Route path={`${process.env.PUBLIC_URL}/city/:city`} element={<CityDetail />} />
          <Route path={`${process.env.PUBLIC_URL}/restaurants`} element={<Restaurants />} />
          <Route path={`${process.env.PUBLIC_URL}/restaurant/:ID`} element={<RestaurantDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
