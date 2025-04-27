import './PointCardComponent.scss';
import React from "react";

interface PointCardComponentProps {
  title: string;
  image: string;
}

const PointCardComponent: React.FC<PointCardComponentProps> = ({ title, image }) => {
  return (
    <div className="point-card">
      <div className="point-card__photo">
        <img src={image} alt="Фото точки" className="point-card__photo__image" />
      </div>
      <div className="point-card__title">
        { title }
      </div>
    </div>
  )
}

export default PointCardComponent;