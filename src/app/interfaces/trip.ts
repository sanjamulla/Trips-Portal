// import { Itinerary } from './itenerary';

export interface Trip {
  id: string;
  destinationName: string;
  price: number;
  imageUrl?: string;
  shortDescription?: string;
  // dificulty: string,
  activity?: string;
  // rating: Array<Rating>,
  // location: string,
  mostPopular?: boolean;
  upComing?: boolean;
  // imageCover: string,
  // reccomandations: string,
  longDescription1?: string;
  longDescription2?: string;
  itinerary?: string[];
  img1?: string;
  img2?: string;
  img3?: string;
}

// export interface APIResponese {
//     results: Array<T>;
// }
export type Trips = Array<Trip>;

export const TripKey = 'trips';

// interface Rating {
//     id: string,
//     count: number,
//     title: string,

// }

// interface Itinerary {
//     dayOne: string,
//     dayTwo: string,
//     dayThree: string,
//     dayFour: string,
// }
