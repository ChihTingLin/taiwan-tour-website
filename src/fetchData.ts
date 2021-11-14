import jsSHA from "jssha";

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

export async function fetchAttractionsByCity(city: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/ScenicSpot/${city}?$top=30&$format=JSON`,
    { headers }
  );
  const result = await res.json();
  return result;
}

export async function fetchActivitiesByCity(city: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/Activity/${city}?$top=30&$format=JSON`,
    { headers }
  );
  const result = await res.json();
  return result;
}

export async function fetchAttractionDetail(ID: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/ScenicSpot/?$filter=ID eq '${ID}'&$format=JSON`,
    { headers }
  );
  const result = await res.json();
  return result;
}

export async function fetchRamdonActivity() {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/Activity/?$select=ID,Name,Address,Picture,Class1,Class2&$filter=Picture/PictureUrl1 ne null&$top=8&format=JSON`,
    { headers }
  );
  const result = await res.json();
  return result;
}

export async function fetchActivityDetail(ID: string) {
  const headers = getAuthHeader();
  const res = await fetch(
    `${apiPrefix}/Tourism/Activity/?$filter=ID eq '${ID}'&$format=JSON`,
    { headers }
  );
  const result = await res.json();
  return result;
}

export async function fetchCityDetail(city: string) {
  const attractions = await fetchAttractionsByCity(city);
  const activities = await fetchActivitiesByCity(city);
  return {attractions, activities};
}
