import RouteCardPhoto1 from '../assets/photos/RouteCardPhoto1.png';
import RouteCardPhoto2 from '../assets/photos/RouteCardPhoto2.png';
import RouteCardPhoto3 from '../assets/photos/RouteCardPhoto3.png';
import RouteCardPhoto4 from '../assets/photos/RouteCardPhoto4.png';
import RouteMap from '../assets/photos/RouteMap.png';

export interface RoutePoint {
  number: number;
  title: string;
}

export interface Route {
  id: number;
  title: string;
  distance: number;
  duration: string;
  rating: number;
  photos: string[];
  points: RoutePoint[];
  mapImage: string;
}

export const mockRoutes: Route[] = [
  {
    id: 1,
    title: 'Большая прогулка по Елани',
    distance: 4,
    duration: '2 часа',
    rating: 5,
    photos: [RouteCardPhoto1, RouteCardPhoto2, RouteCardPhoto3, RouteCardPhoto4],
    points: [
      { number: 1, title: 'Студгородок' },
      { number: 2, title: 'Проспект Кирова, 49' },
      { number: 3, title: 'Улица Дзержинского, 12' },
      { number: 4, title: 'Проспект Фрунзе, 15' },
      { number: 5, title: 'Проспект Фрунзе, 16' },
      { number: 6, title: 'Проспект Фрунзе, 6' },
    ],
    mapImage: RouteMap,
  },
  {
    id: 2,
    title: 'Прогулка по старому Фрунзе',
    distance: 0.5,
    duration: '1 час',
    rating: 4,
    photos: [RouteCardPhoto2, RouteCardPhoto3, RouteCardPhoto1, RouteCardPhoto4],
    points: [
      { number: 1, title: 'Проспект Фрунзе, 15' },
      { number: 2, title: 'Проспект Фрунзе, 16' },
      { number: 3, title: 'Проспект Фрунзе, 6' },
    ],
    mapImage: RouteMap,
  },
];