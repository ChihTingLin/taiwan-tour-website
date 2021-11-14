import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCityDetail } from "../../fetchData";
import { ScenicSpotTourismInfo, Activity } from "../../interface";

interface CityData {
  attractions: ScenicSpotTourismInfo[];
  activities: Activity[];
}

export default function CityDetail() {
  const { city } = useParams();
  const [data, setData] = useState<CityData>(null);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchCityDetail(city).then((data) => {
      setData(data);
      setDataLoaded(true);
    });
  }, []);

  if (!dataLoaded) {
    return null;
  }
  return (
    <div>
      {data.attractions &&
        data.attractions.map((att) => <div key={att.ID}>{att.Name}</div>)}
      {data.activities &&
        data.activities.map((act) => <div key={act.ID}>{act.Name}</div>)}
    </div>
  );
}
