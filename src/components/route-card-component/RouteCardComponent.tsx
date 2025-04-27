import './RouteCardComponent.scss';
import {Star} from "lucide-react";
import {Link} from "react-router-dom";
import React from "react";

interface RouteCardComponentProps {
  id: number;
  title: string;
  size: number;
  rating: number;
  photos: string[];
}

const RouteCardComponent: React.FC<RouteCardComponentProps> = ({ title, size, rating, photos, id }) => {
  return (
    <Link to={`/routes/${id}`} className="route-card">
      <div className="route-card__info">
        <div className="route-card__info__title">
          { title }
        </div>
        <div className="route-card__info__size">
          Расстояние: { size } км
        </div>
        <div className="route-card__info__rating">
          { [...Array(5)].map((_, index) => (
            <Star
              key={index}
              size="24"
              color="#DAA520"
              fill={index < rating ? 'gold' : 'white'}
              className="route-card__info__rating__back"
            />
          )) }
        </div>
      </div>
      <div className="route-card__photos">
        { photos.map((photo, index) => (
          <div key={index} className="route-card__photos__photo">
            <img src={photo} alt={`Достопримечательность ${index + 1}`}/>
          </div>
        ))}
      </div>
    </Link>
  )
}

export default RouteCardComponent;