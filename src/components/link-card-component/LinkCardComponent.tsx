import './LinkCardComponent.scss';
import React from "react";

interface LinkCardComponentProps {
  title: string;
  photo: string;
}

const LinkCardComponent: React.FC<LinkCardComponentProps> = ({ title, photo }) => {
  return (
    <div className="link-card">
      <div className="link-card__photo">
        <img src={photo} alt="Фото точки" className="link-card__photo__img" />
      </div>
      <div className="link-card__title">
        { title }
      </div>
    </div>
  )
}

export default LinkCardComponent;