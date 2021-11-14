import {
  RestaurantTourismInfo,
  ScenicSpotTourismInfo,
  TourismPicture,
  ActivityTourismInfo,
} from "../../interface";

interface Props {
  type: "ScenicSpot" | "Restaurant" | "Activity";
  pictures: TourismPicture;
  name: string;
  categories?: string[];
  description: string;
  scenicSpot?: ScenicSpotTourismInfo;
  restaurant?: RestaurantTourismInfo;
  activity?: ActivityTourismInfo;
}

function getPictures(pictures: TourismPicture) {
  let picArr = [];
  [1,2,3].forEach(n => {
    if (pictures[`PictureUrl${n}`]) {
      picArr.push({
        url: pictures[`PictureUrl${n}`],
        alt: pictures[`PictureDescriptional${n}`],
      });
    }
  })
  return picArr;
}

export default function Detail({
  type,
  pictures,
  name,
  categories,
  description,
  scenicSpot,
  activity,
  restaurant,
}: Props) {
  const images = getPictures(pictures);
  return (
    <div>
      <div>
        {images.map((img) => (
          <img src={img.url} alt={img.alt} key={img.url}/>
        ))}
      </div>
      <h1>{name}</h1>
      {categories && categories.map((cat, i) => <div key={i}>{cat}</div>)}
      <div>
        {type === "ScenicSpot" && <div>景點介紹</div>}
        {type === "Activity" && <div>活動介紹：</div>}
        {type === "Restaurant" && <div>餐廳介紹：</div>}
        <div>{description}</div>
      </div>
      <div>
        <div>
          {type === "ScenicSpot" && (
            <div>
              {scenicSpot.OpenTime && (
                <div>
                  <span>開放時間: </span>
                  {scenicSpot.OpenTime}
                </div>
              )}
              {scenicSpot.Phone && (
                <div>
                  <span>服務電話: </span>
                  {scenicSpot.Phone}
                </div>
              )}
              {scenicSpot.Address && (
                <div>
                  <span>景點地址: </span>
                  {scenicSpot.Address}
                </div>
              )}
              {scenicSpot.WebsiteUrl && (
                <div>
                  <span>官方網站: </span>
                  <a
                    href={scenicSpot.WebsiteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {scenicSpot.WebsiteUrl}
                  </a>
                </div>
              )}
              {scenicSpot.TicketInfo && (
                <div>
                  <span>票價資訊: </span>
                  {scenicSpot.TicketInfo}
                </div>
              )}
              {scenicSpot.Remarks && (
                <div>
                  <span>注意事項: </span>
                  {scenicSpot.Remarks}
                </div>
              )}
            </div>
          )}
          {type === "Activity" && (
            <div>
              {activity.StartTime && (
                <div>
                  <span>活動時間: </span>
                  {`${activity.StartTime} ~ ${activity.EndTime}`}
                </div>
              )}
              {activity.Phone && (
                <div>
                  <span>聯絡電話: </span>
                  {activity.Phone}
                </div>
              )}
              {activity.Organizer && (
                <div>
                  <span>主辦單位: </span>
                  {activity.Organizer}
                </div>
              )}
              {activity.Position && (
                <div>
                  <span>活動地點: </span>
                  {activity.Location}
                  {activity.Address && <> {activity.Address}</>}
                </div>
              )}
              {activity.WebsiteUrl && (
                <div>
                  <span>官方網站: </span>
                  <a
                    href={activity.WebsiteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {activity.WebsiteUrl}
                  </a>
                </div>
              )}
              {activity.Charge && (
                <div>
                  <span>活動費用: </span>
                  {activity.Charge}
                </div>
              )}
              {activity.Remarks && (
                <div>
                  <span>注意事項: </span>
                  {activity.Remarks}
                </div>
              )}
            </div>
          )}
          {type === "Restaurant" && (
            <div>
              {restaurant.OpenTime && (
                <div>
                  <span>活動時間: </span>
                  {restaurant.OpenTime}
                </div>
              )}
              {restaurant.Phone && (
                <div>
                  <span>聯絡電話: </span>
                  {restaurant.Phone}
                </div>
              )}
              {restaurant.Address && (
                <div>
                  <span>餐廳地址: </span>
                  {restaurant.Address}
                </div>
              )}
              {restaurant.WebsiteUrl && (
                <div>
                  <span>官方網站: </span>
                  <a
                    href={restaurant.WebsiteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {restaurant.WebsiteUrl}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
        <div>地圖</div>
      </div>
    </div>
  );
}
