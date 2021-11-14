import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchActivityDetail } from "../../fetchData";
import { Activity } from "../../interface";

export default function AttractionDetail() {
  const { ID } = useParams();
  const [data, setData] = useState<Activity>(null);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetchActivityDetail(ID).then((data) => {
      setData(data[0]);
      setDataLoaded(true);
    });
  }, [ID]);

  if (!dataLoaded) {
    return null;
  }
  return <div>{data.Name}</div>;
}
