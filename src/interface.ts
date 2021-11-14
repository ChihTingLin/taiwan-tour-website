export interface TourismPicture {
  PictureDescriptional1?: string;
  PictureUrl1: string;
  PictureDescriptional2?: string;
  PictureUrl2: string;
  PictureDescriptional3?: string;
  PictureUrl3: string;
}

interface PointType {
  GeoHash: string;
  PositionLat: number;
  PositionLon: number;
}

export interface RestaurantTourismInfo {
  ID: string;
  Name?: string;
  Description?: string;
  Address?: string;
  ZipCode?: string;
  Phone?: string;
  OpenTime?: string;
  WebsiteUrl?: string;
  Picture?: TourismPicture;
  Position?: PointType;
  Class?: string;
  MapUrl?: string;
  ParkingInfo?: string;
  City?: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}

export interface ActivityTourismInfo {
  ID: string;
  Name?: string;
  Description?: string;
  Particpation?: string;
  Location?: string;
  Address?: string;
  Phone?: string;
  Organizer?: string;
  StartTime?: string;
  EndTime?: string;
  Cycle?: string;
  NonCycle?: string;
  WebsiteUrl?: string;
  Picture?: TourismPicture;
  Position?: string;
  Class1?: string;
  Class2?: string;
  MapUrl?: string;
  TravelInfo?: string;
  ParkingInfo?: string;
  Charge?: string;
  Remarks?: string;
  City?: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}

export interface ScenicSpotTourismInfo {
  ID: string;
  Name?: string;
  DescriptionDetail?: string;
  Desccription?: string;
  Phone?: string;
  Address?: string;
  ZipCode?: string;
  TravelInfo?: string;
  OpenTime?: string;
  Picture?: TourismPicture;
  MapUrl?: string;
  Position?: PointType;
  Class1?: string;
  Class2?: string;
  Class3?: string;
  Level?: string;
  WebsiteUrl?: string;
  ParkingInfo?: string;
  ParkingPosition?: PointType;
  TicketInfo?: string;
  Remarks?: string;
  Keyword?: string;
  City?: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}
