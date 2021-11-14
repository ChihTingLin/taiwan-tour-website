import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchRamdonActivity } from "../../fetchData";
import { ActivityTourismInfo } from "../../interface";

export default function Activities() {
  const [activities, setActivities] = useState<ActivityTourismInfo[]>(null);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetchRamdonActivity().then((data) => {
      setActivities(data);
      setDataLoaded(true);
    });
  }, []);
  if (!dataLoaded) {
    return null;
  }
  return (
    <div>
      <h1>熱門活動</h1>
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
