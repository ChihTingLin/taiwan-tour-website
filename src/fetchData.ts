import jsSHA from "jssha";
import {
  RestaurantTourismInfo,
  ActivityTourismInfo,
  ScenicSpotTourismInfo,
} from "./interface";

const apiPrefix = "https://ptx.transportdata.tw/MOTC/v2";
function getAuthHeader() {
  const id = process.env.REACT_APP_TDX_ID;
  const key = process.env.REACT_APP_TDX_KEY;
  const timestamp = new Date().toUTCString();
  const shaObj = new jsSHA("SHA-1", "TEXT");
  shaObj.setHMACKey(key, "TEXT");
  shaObj.update(`x-date: ${timestamp}`);
  let hmac = shaObj.getHMAC("B64");
  return {
    Accept: "application/json",
    Authorization: `hmac username="${id}", algorithm="hmac-sha1", headers="x-date", signature="${hmac}"`,
    "x-date": timestamp,
    "Accept-Encoding": "gzip",
  };
}

export async function fetchScenicSpotsByCity(city: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/ScenicSpot/${city}?$top=30&$format=JSON`,
    { headers }
  );
  const result: ScenicSpotTourismInfo[] = await res.json();
  return result;
}

export async function fetchActivitiesByCity(city: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/Activity/${city}?$top=30&$format=JSON`,
    { headers }
  );
  const result: ActivityTourismInfo[] = await res.json();
  return result;
}

export async function fetchScenicSpotDetail(ID: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/ScenicSpot/?$filter=ID eq '${ID}'&$format=JSON`,
    { headers }
  );
  const result: ScenicSpotTourismInfo = await res.json();
  return result;
}

export async function fetchRamdonActivity() {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/Activity/?$select=ID,Name,Address,Picture,Class1,Class2&$filter=Picture/PictureUrl1 ne null&$top=30&format=JSON`,
    { headers }
  );
  const result: ActivityTourismInfo[] = await res.json();
  return result;
}

export async function fetchRamdonRestaurant() {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/Restaurant/?$select=ID,Name,Address,Picture,Class&$filter=Picture/PictureUrl1 ne null&$top=30&format=JSON`,
    { headers }
  );
  const result: RestaurantTourismInfo[] = await res.json();
  return result;
}

export async function fetchRestaurantDetail(ID: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/Restaurant/?$filter=ID eq '${ID}'&$format=JSON`,
    { headers }
  );
  const result: RestaurantTourismInfo = await res.json();
  return result;
}

export async function fetchActivityDetail(ID: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/Activity/?$filter=ID eq '${ID}'&$format=JSON`,
    { headers }
  );
  const result: ActivityTourismInfo = await res.json();
  return result;
}

export async function fetchCityDetail(city: string) {
  const scenicSpots = await fetchScenicSpotsByCity(city);
  const activities = await fetchActivitiesByCity(city);
  return { scenicSpots, activities };
}

export async function fetchMixedTourismData({
  city = "",
  numToDisplay = 4,
  requiredFields,
  mustHaveField = 'Picture/PictureUrl1'
}: {
  city?: string;
  numToDisplay?: number;
  requiredFields?: string[];
  mustHaveField?: string;
}) {
  const headers = getAuthHeader();
  let query = "format=JSON";
  if (requiredFields) query = `${query}&$select=${requiredFields.join(',')}`
  if (mustHaveField) query = `${query}&$filter=${mustHaveField} ne null`
  if (numToDisplay) query = `${query}&$top=${numToDisplay}`
  const restaurantRes = fetch(
    `${apiPrefix}/Tourism/Restaurant/${city}?${query}`,
    { headers }
  ).then((res) => res.json());
  const activityRes = fetch(
    `${apiPrefix}/Tourism/Activity/${city}?${query}`,
    { headers }
  ).then((res) => res.json());
  const scenicSpotRes = fetch(
    `${apiPrefix}/Tourism/ScenicSpot/${city}?${query}`,
    { headers }
  ).then((res) => res.json());
  const [restaurants, activities, scenicSpots] = await Promise.all([
    restaurantRes,
    activityRes,
    scenicSpotRes,
  ]);
  return { restaurants, activities, scenicSpots };
}

export async function fetchByKeyword(keyword:string) {
  
}
