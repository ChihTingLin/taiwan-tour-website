import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select from "../../components/DropdownSelect/Select";
import { cityList } from "../../staticData";
import { fetchAttractionsByCity } from "../../fetchData";
import { ScenicSpotTourismInfo } from "../../interface";

function Attractions() {
  const [attractions, setAttractions] = useState<ScenicSpotTourismInfo[]>([]);
  const [city, setCity] = useState<string>("");
  useEffect(() => {
    if (city) {
      fetchAttractionsByCity(city).then((data) => {
        setAttractions(data[0]);
      });
    }
  }, [city]);

  return (
    <div>
      <h1>探索景點</h1>
      <Select options={cityList} onChange={(s) => setCity(s.value)} />
      {city && attractions && (
        <div>
          <h3>搜尋結果</h3>
          <div>共有 {attractions.length} 筆</div>
        </div>
      )}
      {attractions.map((at) => (
        <div key={at.ID}>
          <Link to={`/attraction/${at.ID}`}>
            <img
              src={
                at.Picture.PictureUrl1 ||
                at.Picture.PictureUrl2 ||
                at.Picture.PictureUrl3
              }
              alt={at.Name}
              width="200"
            />
          </Link>
          <div>{at.Name}</div>
        </div>
      ))}
    </div>
  );
}

export default Attractions;
