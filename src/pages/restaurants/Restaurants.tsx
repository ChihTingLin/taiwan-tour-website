import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchRamdonRestaurant } from "../../fetchData";
import { RestaurantTourismInfo } from "../../interface";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantTourismInfo[]>(null);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetchRamdonRestaurant().then((data) => {
      setRestaurants(data);
      setDataLoaded(true);
    });
  }, []);
  if (!dataLoaded) {
    return null;
  }
  return (
    <div>
      <h1>在地美食</h1>
      <div>
        {restaurants.map((rest) => (
          <div key={rest.ID}>
            <Link to={`/restaurant/${rest.ID}`}>{rest.Name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
