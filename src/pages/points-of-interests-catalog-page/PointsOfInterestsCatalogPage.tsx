import PointCardComponent from "../../components/point-card-component/PointCardComponent.tsx";
import './PointsOfInterestsCatalogPage.scss';
import { Link } from "react-router-dom";
import { pointsOfInterest } from "../../mock-data/mockPoints.ts";

const PointsOfInterestsCatalogPage = () => {
  return (
    <div className="points-of-interests-catalog">
      <div className="points-of-interests-catalog__header">
        Каталог всех точек интереса
      </div>
      <div className="points-of-interests-catalog__points-list">
        {pointsOfInterest.map((point) => (
          <Link className="points-of-interests-catalog__points-list__link" key={point.id} to={`/point/${point.id}`}>
            <PointCardComponent
              title={point.title}
              image={point.image}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PointsOfInterestsCatalogPage;