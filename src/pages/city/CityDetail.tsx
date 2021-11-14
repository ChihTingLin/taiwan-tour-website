import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMixedTourismData } from "../../fetchData";
import {
  ScenicSpotTourismInfo,
  ActivityTourismInfo,
  RestaurantTourismInfo,
} from "../../interface";
import { cityList } from "../../staticData";

interface CityData {
  scenicSpots: ScenicSpotTourismInfo[];
  activities: ActivityTourismInfo[];
  restaurants: RestaurantTourismInfo[];
}

export default function CityDetail() {
  const { city } = useParams();
  const [data, setData] = useState<CityData>(null);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const title = cityList.find((c) => c.value === city).label;

  useEffect(() => {
    fetchMixedTourismData({ city }).then((data) => {
      setData(data);
      setDataLoaded(true);
    });
  }, []);

  if (!dataLoaded) {
    return null;
  }
  return (
    <div>
      <h1>{title}</h1>
      <h2>景點</h2>
      {data.scenicSpots &&
        data.scenicSpots.map((scen) => <div key={scen.ID}>{scen.Name}</div>)}
      <h2>活動</h2>
      {data.activities &&
        data.activities.map((act) => <div key={act.ID}>{act.Name}</div>)}
      <h2>美食</h2>
      {data.restaurants &&
        data.restaurants.map((rest) => <div key={rest.ID}>{rest.Name}</div>)}
    </div>
  );
}
