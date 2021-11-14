import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cityList } from "../staticData";
import { fetchRamdonActivity } from "../fetchData";
import { Activity } from "../interface";

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetchRamdonActivity().then((data) => {
      setActivities(data);
    });
  }, []);

  return (
    <div>
      <h3>熱門城市</h3>
      <div>
        {cityList
          .filter((c) => c.isPopular)
          .map((city) => (
            <div key={city.value}><Link to={`/city/${city.value}`}>{city.label}</Link></div>
          ))}
      </div>
      <h3>熱門活動</h3>
      <div>
        {activities.map((act) => (
          <div key={act.ID}>
            <Link to={`/activity/${act.ID}`}>{act.Name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
