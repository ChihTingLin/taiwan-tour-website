import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchScenicSpotDetail } from "../../fetchData";
import { ScenicSpotTourismInfo } from "../../interface";
import Detail from "../../components/detail/Detail";

export default function AttractionDetail() {
  const { ID } = useParams();
  const [data, setData] = useState<ScenicSpotTourismInfo>(null);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchScenicSpotDetail(ID).then((data) => {
      setData(data[0]);
      setDataLoaded(true);
    });
  }, [ID]);

  if (!dataLoaded) {
    return null;
  }
  return (
    <Detail
      type="ScenicSpot"
      name={data.Name}
      description={data.Desccription}
      pictures={data.Picture}
      categories={[data.Class1, data.Class2, data.Class3]}
      scenicSpot={data}
    />
  );
}
