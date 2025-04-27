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
    title: 'Студгородок',
    distance: 1.1,
    duration: '2 часа',
    rating: 5,
    photos: [RouteCardPhoto1, RouteCardPhoto2, RouteCardPhoto3, RouteCardPhoto4],
    points: [
      { number: 1, title: 'Иоанно-Предтеченский женский монастырь' },
      { number: 2, title: 'Иоанно-Предтеченский женский монастырь' },
      { number: 3, title: 'Иоанно-Предтеченский женский монастырь' },
      { number: 4, title: 'Иоанно-Предтеченский женский монастырь' },
      { number: 5, title: 'Иоанно-Предтеченский женский монастырь' },
    ],
    mapImage: RouteMap,
  },
  {
    id: 2,
    title: 'Исторический центр',
    distance: 2.5,
    duration: '3 часа',
    rating: 4,
    photos: [RouteCardPhoto2, RouteCardPhoto3, RouteCardPhoto1, RouteCardPhoto4],
    points: [
      { number: 1, title: 'Площадь Истории' },
      { number: 2, title: 'Музей города' },
      { number: 3, title: 'Старинный театр' },
    ],
    mapImage: RouteMap,
  },
  {
    id: 3,
    title: 'Набережная Томи',
    distance: 3.2,
    duration: '1.5 часа',
    rating: 3,
    photos: [RouteCardPhoto3, RouteCardPhoto1, RouteCardPhoto4, RouteCardPhoto2],
    points: [
      { number: 1, title: 'Смотровая площадка' },
      { number: 2, title: 'Парк у реки' },
    ],
    mapImage: RouteMap,
  },
];