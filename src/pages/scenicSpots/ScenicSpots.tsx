import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "../../components/DropdownSelect/Select";
import { cityList } from "../../staticData";
import { fetchScenicSpotsByCity } from "../../fetchData";
import { ScenicSpotTourismInfo } from "../../interface";

function Attractions() {
  const [scenicSpots, setScenicSpots] = useState<ScenicSpotTourismInfo[]>([]);
  const [city, setCity] = useState<string>("");
  useEffect(() => {
    if (city) {
      fetchScenicSpotsByCity(city).then((data) => {
        setScenicSpots(data);
      });
    }
  }, [city]);

  return (
    <div>
      <h1>探索景點</h1>
      <Select options={cityList} onChange={(s) => setCity(s.value)} />
      {city && scenicSpots && (
        <div>
          <h3>搜尋結果</h3>
          <div>共有 {scenicSpots.length} 筆</div>
        </div>
      )}
      {scenicSpots.map((scen) => (
        <div key={scen.ID}>
          <Link to={`/scenic-spot/${scen.ID}`}>
            {scen.Picture.PictureUrl1 ||
              scen.Picture.PictureUrl2 ||
              (scen.Picture.PictureUrl3 && (
                <img
                  src={
                    scen.Picture.PictureUrl1 ||
                    scen.Picture.PictureUrl2 ||
                    scen.Picture.PictureUrl3
                  }
                  alt={scen.Name}
                  width="200"
                />
              ))}
            <div>{scen.Name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Attractions;
