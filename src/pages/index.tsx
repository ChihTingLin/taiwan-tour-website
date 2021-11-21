import { useState, useEffect, ReactElement } from "react";
import { Link } from "react-router-dom";
import { cityList } from "../staticData";
import { fetchMixedTourismData } from "../fetchData";
import {
  ActivityTourismInfo,
  RestaurantTourismInfo,
  ScenicSpotTourismInfo,
} from "../interface";

function Section({
  title,
  list,
  moreLink,
  moreText,
  dataLoaded,
  itemLinkPrefix,
  listSize=4
}: {
  title: string;
  list: any[];
  moreLink: string;
  moreText: string;
  dataLoaded: boolean;
  itemLinkPrefix: string;
  listSize?: number;
}) {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="text-xl">{title}</h3>
        <Link to={`${process.env.PUBLIC_URL}${moreLink}`}>{moreText}</Link>
      </div>
      {dataLoaded && (
        <div className="flex flex-row justify-between mb-4">
          {Array(listSize)
            .fill("")
            .map((t, i) => {
              const item = list[i];
              return (
                <div key={item.ID}>
                  <Link
                    to={`${process.env.PUBLIC_URL}${itemLinkPrefix}/${item.ID}`}
                  >
                    {item.Name || item.label}
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [activities, setActivities] = useState<ActivityTourismInfo[]>([]);
  const [restaurants, setRestaurants] = useState<RestaurantTourismInfo[]>([]);
  const [scenicSpots, setScenicSpot] = useState<ScenicSpotTourismInfo[]>([]);

  useEffect(() => {
    fetchMixedTourismData({
      numToDisplay: 4,
      requiredFields: ["ID", "Picture", "Name"],
    }).then(({ restaurants, scenicSpots, activities }) => {
      setScenicSpot(scenicSpots);
      setActivities(activities);
      setRestaurants(restaurants);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div>
      <div className="mb-4">
        <div>
          <h1 className="text-4xl leading-snug">
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
      <Section
        title="近期活動"
        moreText="查看更多活動"
        moreLink="/activities"
        list={activities}
        dataLoaded={dataLoaded}
        itemLinkPrefix="/activity"
      />
      <Section
        title="熱門打卡景點"
        moreText="查看更多景點"
        moreLink="/scenic-spots"
        list={scenicSpots}
        dataLoaded={dataLoaded}
        itemLinkPrefix="/scenic-spot"
      />
      <Section
        title="一再回訪美食"
        moreText="查看更多美食"
        moreLink="/restaurants"
        list={restaurants}
        dataLoaded={dataLoaded}
        itemLinkPrefix="/restaurant"
      />
      <Section
        title="熱門城市"
        moreText="所有城市"
        moreLink="/citiy"
        list={cityList.filter(c => c.isPopular)}
        dataLoaded={dataLoaded}
        itemLinkPrefix="/city"
        listSize={8}
      />

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
