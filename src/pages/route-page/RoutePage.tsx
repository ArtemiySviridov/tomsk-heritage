import { Star } from "lucide-react";
import './RoutePage.scss';
import { mockRoutes, RoutePoint } from "../../mock-data/routesMock.ts";
import { useParams } from "react-router-dom";

const RoutePage = () => {
  const { id } = useParams<{ id: string }>();
  const route = mockRoutes.find((route) => route.id === Number(id));

  if (!route) {
    return <div>Маршрут не найден</div>;
  }

  return (
    <div className="route">
      <div className="route__header">
        <div className="route__header__photo">

        </div>
        <div className="route__header__info">
          <div className="route__header__info__title">
            {route.title}
          </div>
          <div className="route__header__info__size">
            Расстояние: {route.distance} км
          </div>
          <div className="route__header__info__duration">
            Время прохождения: {route.duration} часа
          </div>
          <div className="route__header__info__rating">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                strokeWidth="2"
                size="24"
                color="#DAA520"
                fill={index < route.rating ? 'gold' : 'white'}
                className="route-card__info__rating__back"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="route__route-info">
        <div className="route__route-info__list-title">
          Компоненты маршрута
        </div>
        <div className="route__route-info__points-list">
          { route.points.map((point: RoutePoint) => (
            <div key={point.number} className="route__route-info__points-list__point">
              <div className="route__route-info__points-list__point__number-container">
                <div className="route__route-info__points-list__point__number-container__number">
                  { point.number }
                </div>
              </div>
              <div className="route__route-info__points-list__point__title">
                { point.title }
              </div>
            </div>
          ))}
        </div>

        <div className="route__route-info__route-map">
          <div className="route__route-info__route-map__title">
            Карта маршрута
          </div>
          <img src={route.mapImage} alt={`Карта маршрута`} className="route__route-info__route-map__map"/>
        </div>
      </div>
    </div>
  )
}

export default RoutePage;