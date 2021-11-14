import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cityList } from "../staticData";
import { fetchMixedTourismData } from "../fetchData";
import {
  ActivityTourismInfo,
  RestaurantTourismInfo,
  ScenicSpotTourismInfo,
} from "../interface";

export default function Home() {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [activities, setActivities] = useState<ActivityTourismInfo[]>([]);
  const [restaurants, setRestaurants] = useState<RestaurantTourismInfo[]>([]);
  const [scenicSpots, setScenicSpot] = useState<ScenicSpotTourismInfo[]>([]);

  useEffect(() => {
    fetchMixedTourismData({numToDisplay: 4, requiredFields: ['ID', 'Picture', 'Name']}).then(
      ({ restaurants, scenicSpots, activities }) => {
        setScenicSpot(scenicSpots);
        setActivities(activities);
        setRestaurants(restaurants);
        setDataLoaded(true);
      }
    );
  }, []);

  return (
    <div>
      <div className="display-flex flex-between">
        <div>
          <h1>
            探索台灣之美
            <br />
            讓我們更親近這片土地
          </h1>
          <h2>
            台灣旅遊景點導覽<span>Taiwan Travel Guide</span>
          </h2>
        </div>
        {/* <div>
          <input placeholder="你想去哪裡？" />
          <button>搜尋</button>
        </div> */}
      </div>
      {/* <div className="carousel">新北市 | 不厭亭</div> */}
      <div>
        <div className="display-flex flex-between">
          <h3>近期活動</h3>
          <Link to="/activities">查看更多活動</Link>
        </div>
        {dataLoaded && (
          <div>
            {/* activity cards */}
            {Array(4)
              .fill("")
              .map((t, i) => {
                const act = activities[i];
                return (
                  <div key={act.ID}>
                    <Link to={`/activity/${act.ID}`}>{act.Name}</Link>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <div>
        <div className="display-flex flex-between">
          <h3>熱門打卡景點</h3>
          <Link to="/scenic-spots">查看更多景點</Link>
        </div>
        <div>
          {/* acttraction cards */}
          {dataLoaded &&
            scenicSpots.map((scen) => (
              <div key={scen.ID}>
                <Link to={`/scenic-spot/${scen.ID}`}>{scen.Name}</Link>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="display-flex flex-between">
          <h3>一再回訪美食</h3>
          <Link to="/restaurants">查看更多美食</Link>
        </div>
        <div>
          {/* restaurtant cards */}
          {dataLoaded &&
            restaurants.map((rest) => (
              <div key={rest.ID}>
                <Link to={`/restaurant/${rest.ID}`}>{rest.Name}</Link>
              </div>
            ))}
        </div>
      </div>

      <h3>熱門城市</h3>
      <div>
        {cityList
          .filter((c) => c.isPopular)
          .map((city) => (
            <div key={city.value}>
              <Link to={`/city/${city.value}`}>{city.label}</Link>
            </div>
          ))}
      </div>
      {/* <h3>熱門活動</h3>
      <div>
        {activities.map((act) => (
          <div key={act.ID}>
            <Link to={`/activity/${act.ID}`}>{act.Name}</Link>
          </div>
        ))}
      </div> */}
    </div>
  );
}
