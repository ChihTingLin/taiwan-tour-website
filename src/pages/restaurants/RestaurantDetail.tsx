import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantDetail } from "../../fetchData";
import { RestaurantTourismInfo } from "../../interface";

export default function RestaurantDetail() {
  const { ID } = useParams();
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [data, setData] = useState<RestaurantTourismInfo>(null);
  useEffect(() => {
    fetchRestaurantDetail(ID).then((data) => {
      setData(data[0]);
      setDataLoaded(true);
    });
  }, [ID]);
  if (!dataLoaded) return null;
  return <div>{data.Name}</div>;
}
