import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchActivityDetail } from "../../fetchData";
import { ActivityTourismInfo } from "../../interface";
import Detail from "../../components/detail/Detail";

export default function AttractionDetail() {
  const { ID } = useParams();
  const [data, setData] = useState<ActivityTourismInfo>(null);
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
  return (
    <Detail
      type="Activity"
      name={data.Name}
      pictures={data.Picture}
      description={data.Description}
      categories={[data.Class1, data.Class2]}
      activity={data}
    />
  );
}
