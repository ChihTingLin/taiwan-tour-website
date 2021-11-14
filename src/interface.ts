interface TourismPicture {
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

export interface Activity {
  Address?: string;
  Class1?: string;
  Class2?: string;
  EndTime?: Date;
  ID: string;
  Name?: string;
  Picture?: TourismPicture;
  SrcUpdateTime?: Date;
  StartTime?: Date;
  UpdateTime?: Date;
}

export interface ScenicSpotTourismInfo {
  ID: string;
  Name?: string;
  DescriptionDetail?: string;
  Desccription?: string;
  Phone?: string;
  Addres?: string;
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
  SrcUpdateTime: Date;
  UpdateTime: Date;
}
