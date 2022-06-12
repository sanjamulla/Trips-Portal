import { Injectable } from '@angular/core';
import { TripKey } from '../interfaces/trip';
import { LocalStorageDataServiceService } from './local-storage-data-service.service';

@Injectable({
  providedIn: 'root',
})
export class TripService extends LocalStorageDataServiceService {
  key: string;

  constructor() {
    super();

    this.initialize();

    this.key = TripKey;
  }

  filter(filters: any) {
    return this.all().filter(
      (trip: any) => {
          return (filters.destination == null || filters.destination == '' || trip.destinationName.toLowerCase().includes(filters.destination.toLowerCase()) &&
          (filters.difficulty == null || filters.difficulty == '' || trip.difficulty.toLowerCase() == filters.difficulty.toLowerCase()) &&
          (filters.activity == null || filters.activity == '' || trip.activity.toLowerCase()==filters.activity.toLowerCase() ))
      });
  }

  popular() {
    return this.all().filter((trip: any) => trip.mostPopular === true);
  }

  upcoming() {
    return this.all().filter((trip: any) => trip.upComing === true);
  }

  // find(id: any) {
  //   return this.item

  // }
  // find(id: any): Trip {
  //   return <Trip>this.trips.find((trip) => trip.id == id);
  // }

  initialize(): void {
    const trips = [
      {
        id: '111',
        destinationName: 'Theth',
        price: 150,
        imageUrl: 'assets/images/cardsimg/theth.jpg',
        shortDescription: 'Enjoy the panoramic view and feel new experiences.',
        difficulty: 'Extreme',
        activity: 'Hiking',
        // rating: Array < Rating >,
        // location: string,
        mostPopular: true,
        upComing: false,
        // imageCover: string,
        // reccomandations: string,
        longDescription1: `
        A trip to the Balkans is not complete without visiting the village town
        of Theth in Albania. This is the perfect place to see the pristine
        Albanian Alps, also called, the accursed mountains. This region is
        called the 'Albanian Alps' for a reason, as you can expect to see sky
        high peaks and clear blue mountain water, idyllic stone houses and herds
        of sheep. This area is extremely underrated and we think it's time to
        shed some light on this area of Albania. Keep on reading to get all the
        information you need for your next trip to Theth, Albania!
     
      `,
        longDescription2: `There can still be snow around Theth in the month of June! Therefore, we
      recommend to visit Theth Albania anywhere between July to October.
      Around the end of October and the beginning of November the facilities
      in and around Theth close for winter.`,
        // itinerary: [
        //   // 'Hike to the blue eye: The water is incredibly blue, clear and cold! It looks extremely tempting to jump in and swim but, think twice! See the Grunas waterfall: This is a short one hour hike from Theth, and therefore a fun and easy thing to do in Theth',
        // ],
        img1: '../../assets/images/single-trip-pictures/theth1.jpg',
        img2: '../../assets/images/single-trip-pictures/theth4.jpg',
        img3: '../../assets/images/single-trip-pictures/theth3.jpg',
      },

      {
        id: '115',
        destinationName: 'Korce',
        price: 35,
        shortDescription:
          "Korçë is often thought of as one of Albania's most beautiful cities.",
        imageUrl: 'assets/images/cardsimg/korce.jpg',
        difficulty: 'Easy',
        activity: 'Sightseeing',
        // rating: Array < Rating >,
        // location: string,
        // mostPopular: boolean,
        // upComing: boolean,
        // imageCover: string,
        // reccomandations: string,
        longDescription1: `The country's eighth-largest city by population, Korçë (pronounced 'kor-cha') has a history that dates back to the 13th century. It's known for its role in Albanian culture and intellectual heritage (most famously for being home to the first Albanian language school), world-class museums, beautiful old churches, and pretty architecture.

      It gets its rather idyllic nickname, 'The City of Serenades', from the love ballads men used to belt out from the balconies and courtyards of their enigmatic European villas. Sadly, the sounds of guitar and mandolin don't fill the streets of Korca like they did in the 1930s - but the town still has the same charm and a feeling of nostalgia.
      `,
        longDescription2: `Korca is an all-season destination with relatively mild weather year-round. Winter brings cold overnight temperatures and snow; while the warmer months see the town come alive with festivals and special events.
      If you're travelling Albania in the off season, it's a great addition to your schedule.
      In April, Korca hosts a two-week-long Spring Fair with outdoor markets and parades. In June, there's Carnival, in July the Lakror Fest (celebrating the city's favourite pie and its culinary traditions), in August the Beer Fest, and in October the Apple Fest.
      Whenever you decide to visit, there's a good chance there will be a special event taking place.
      `,
        // itinerary: Array < Itinerary >
        img1: '../../assets/images/single-trip-pictures/korca1.jpg',
        img2: '../../assets/images/single-trip-pictures/korca2.jpg',
        img3: '../../assets/images/single-trip-pictures/korca3.jpg',
      },

      {
        id: '120',
        destinationName: 'Berat',
        price: 40,
        shortDescription:
          'The pride of Albanian architecture under the protection of UNESCO.',
        imageUrl: 'assets/images/cardsimg/berat.jpg',
        difficulty: 'Easy',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        longDescription1: `Berat in central Albania is an elegant stone-and-alabaster city wreathed in fig trees and cleaved by the Osumi river.

      An ancient Illyrian settlement turned Byzantine frontier town, Berat is known for the Ottoman houses that cascade down both sides of its gentle river valley. Evenly spaced portals cut into the stone facades lend it the famous epithet: 'The City of a Thousand Windows'.
      `,
        longDescription2: `Berat is home to one of two UNESCO-listed historic centres (the other being in Gjirokaster), making it a must-see in Albania for history buffs and culture lovers alike.

      Between the unusual Berat Kala and the medieval bazaar, historic mosques, local cuisine, a lively cafe scene and one of the handsomest Ethnographic Museums in the Balkans, Berat has a lot to offer. Not to mention the spectacular valleys, canyons and wineries within easy reach of the city. There are so many reasons to add a few days in Berat to your Albania itinerary.
      `,
        img1: '../../assets/images/single-trip-pictures/berat1.jpg',
        img2: '../../assets/images/single-trip-pictures/berat2.jpg',
        img3: '../../assets/images/single-trip-pictures/berat3.jpg',
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '117',
        destinationName: 'Sarande',
        price: 90,
        shortDescription:
          'Explore the unofficial capital of the Albanian Riviera.',
        imageUrl: 'assets/images/cardsimg/sarande.jpg',
        difficulty: 'Moderate',
        activity: 'Beach',
        // rating: Array < Rating >,
        // location: string,
        mostPopular: true,
        // upComing: boolean,
        // imageCover: string,
        // reccomandations: string,
        // longDiscription: string,
        // itinerary: Array < Itinerary >
      },

      {
        id: '118',
        destinationName: 'Dhermi',
        price: 100,
        shortDescription: 'Sea, nature, typicall village and summer festivals.',
        imageUrl: 'assets/images/cardsimg/dhermi.jpg',
        difficulty: 'Easy',
        activity: 'Beach',
        // rating: Array < Rating >,
        // location: string,
        // mostPopular: boolean,
        upComing: true,
        // imageCover: string,
        // reccomandations: string,
        // longDiscription: string,
        // itinerary: Array < Itinerary >
      },

      {
        id: '119',
        destinationName: 'Gjirokaster',
        price: 50,
        shortDescription:
          'Visit the City of Stone in ain a dramatic and eye-catching way.',
        imageUrl: 'assets/images/cardsimg/gjirokaster.jpg',
        difficulty: 'Easy',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },
      
      {
        id: '121',
        destinationName: 'Kruje',
        price: 35,
        shortDescription:
          'It offers an open visit to an amazing panoramic view.',
        imageUrl: 'assets/images/cardsimg/kruje.jpg',
        difficulty: 'Easy',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        mostPopular: true,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '122',
        destinationName: 'Pogradec',
        price: 40,
        shortDescription:
          'Tradition in hosting family tourism, and for the pleasant fresh climate.',
        imageUrl: 'assets/images/cardsimg/pogradec.jpg',
        difficulty: 'Easy',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        // upComing: true,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '123',
        destinationName: 'Butrint',
        price: 90,
        shortDescription: 'The Microcosmos of Mediterranean.',
        imageUrl: 'assets/images/cardsimg/butrint.jpg',
        difficulty: 'Moderate',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        mostPopular: true,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '124',
        destinationName: 'Ksamil',
        price: 100,
        shortDescription:
          'The Pearl of Southern Albania, wonderful view and amazing sea.',
        imageUrl: 'assets/images/cardsimg/ksamil.jpg',
        difficulty: 'Moderate',
        activity: 'Beach',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '125',
        destinationName: 'Tamare',
        price: 60,
        shortDescription: 'Enjoy the picturesque panorama and the fresh food.',
        imageUrl: 'assets/images/cardsimg/tamare.jpg',
        difficulty: 'Tough',
        activity: 'Hiking',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        upComing: true,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '126',
        destinationName: 'Drimadhe',
        price: 150,
        shortDescription: 'Sea, nature, typicall village and summer festivals.',
        imageUrl: 'assets/images/cardsimg/drimadhe.jpg',
        difficulty: 'Moderate',
        activity: 'Beach',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        upComing: true,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        // itinerary: Array < Itinerary >
      },

      {
        id: '127',
        destinationName: 'Lumi i Shales',
        price: 70,
        shortDescription:
          'Crystal water and magical nature will make you enjoy every second.',
        imageUrl: 'assets/images/cardsimg/lumishales.jpg',
        difficulty: 'Tough',
        activity: 'Beach',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        // upComing: true,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '128',
        destinationName: 'Kanionet e Osumit',
        price: 45,
        shortDescription:
          'A new experience, with great memories and fun stuff.',
        imageUrl: 'assets/images/cardsimg/kanionetosum.jpg',
        difficulty: 'Tough',
        activity: 'Rafting',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        upComing: true,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '129',
        destinationName: 'Jale',
        price: 150,
        shortDescription: 'Sea, nature, typicall village and summer festivals.',
        imageUrl: 'assets/images/cardsimg/jale.jpg',
        difficulty: 'Moderate',
        activity: 'Beach',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '130',
        destinationName: 'Sazan',
        price: 70,
        shortDescription:
          'One of the hottest summer destinations and most visited one.',
        imageUrl: 'assets/images/cardsimg/sazan.jpg',
        difficulty: 'Easy',
        activity: 'Beach',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '131',
        destinationName: 'Lepushe',
        price: 50,
        shortDescription: 'Lookout to find yourself in the middle of nature.',
        imageUrl: 'assets/images/cardsimg/lepushe.jpg',
        difficulty: 'Extreme',
        activity: 'Hiking',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '132',
        destinationName: 'Permet',
        price: 40,
        shortDescription:
          'The greenest town in Albania, also known as the city of roses.',
        imageUrl: 'assets/images/cardsimg/permet.jpg',
        difficulty: 'Easy',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '133',
        destinationName: 'Vlora',
        price: 70,
        shortDescription:
          'Its shores present a unique mixture of rocky and sand beaches.',
        imageUrl: 'assets/images/cardsimg/vlore.jpg',
        difficulty: 'Easy',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '134',
        destinationName: 'Durres',
        price: 20,
        shortDescription:
          'The city of ancient archaeological sites and findings.',
        imageUrl: 'assets/images/cardsimg/durres.jpg',
        difficulty: 'Easy',
        activity: 'Beach',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '135',
        destinationName: 'Lezhe',
        price: 35,
        shortDescription:
          "It is one of  Albania's ancient cities. The Memorial Grave of Skanderbeg.",
        imageUrl: 'assets/images/cardsimg/lezhe.jpg',
        difficulty: 'Easy',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '136',
        destinationName: 'Vermosh',
        price: 60,
        shortDescription:
          'A dramatic journey through the spectacular mountainous.',
        imageUrl: 'assets/images/cardsimg/vermosh.jpg',
        difficulty: 'Tough',
        activity: 'Hiking',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '137',
        destinationName: 'Razem',
        price: 60,
        shortDescription:
          'Offers for you a typical Albanian atmosphere in the heart of the Alps.',
        imageUrl: 'assets/images/cardsimg/razem.jpg',
        difficulty: 'Moderate',
        activity: 'Hiking',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '138',
        destinationName: 'Boge',
        price: 70,
        shortDescription:
          'The presence of the ski resort attracts many visitors.',
        imageUrl: 'assets/images/cardsimg/boge.jpg',
        difficulty: 'Moderate',
        activity: 'Hiking',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '139',
        destinationName: 'Himare',
        price: 110,
        shortDescription:
          'Find the crystal clear, azure water and soft-sanded in Himare Beach.',
        imageUrl: 'assets/images/cardsimg/himare.jpg',
        difficulty: 'Moderate',
        activity: 'Beach',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },

      {
        id: '140',
        destinationName: 'Brezovice',
        price: 80,
        shortDescription:
          'The presence of the ski resort attracts many visitors.',
        imageUrl: 'assets/images/cardsimg/brezovice.jpg',
        difficulty: 'Moderate',
        activity: 'Sightseeing',
        //   // rating: Array < Rating >,
        //   // location: string,
        //   // mostPopular: boolean,
        //   // upComing: boolean,
        //   // imageCover: string,
        //   // reccomandations: string,
        //   // longDiscription: string,
        //   // itinerary: Array < Itinerary >
      },
    ];

    localStorage.setItem(TripKey, JSON.stringify(trips));
  }

}
