import RouteCardComponent from "../../components/route-card-component/RouteCardComponent.tsx";
import './RoutesCatalogPage.scss';
import { mockRoutes } from "../../mock-data/routesMock.ts";

const RoutesCatalogPage = () => {
  return (
    <div className="routes-catalog">
      <div className="routes-catalog__title">
        Каталог всех маршрутов
      </div>
      <div className="routes-catalog__list">
        { mockRoutes.map((route) => (
          <RouteCardComponent
            key={route.id}
            id={route.id}
            title={route.title}
            size={route.distance}
            rating={route.rating}
            photos={route.photos}
          />
        )) }
      </div>
    </div>
  )
}

export default RoutesCatalogPage;