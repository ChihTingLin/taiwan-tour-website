import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAttractionDetail } from "../../../fetchData";
import { ScenicSpotTourismInfo } from "../../../interface";

export default function AttractionDetail() {
  const { ID } = useParams();
  const [data, setData] = useState<ScenicSpotTourismInfo>(null);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchAttractionDetail(ID).then((data) => {
      setData(data[0]);
      setDataLoaded(true);
    });
  }, [ID]);

  if (!dataLoaded) {
    return null;
  }
  return <div>{data.Name}</div>;
}
