import './ServiceCardComponent.scss';
import React, {useEffect, useState} from "react";
import ButtonComponent from "../button-component/ButtonComponent.tsx";
import {BookA, MapPinned, Route} from "lucide-react";

interface ServiceCardComponentProps {
  title: string;
  description: string;
  buttonText: string;
  moveTo: string;
  iconType: string;
}

const ServiceCardComponent: React.FC<ServiceCardComponentProps> = ({ title, description, buttonText, moveTo, iconType }) => {
  const [isconSize, setIconSize] = useState<number>(0);

  useEffect(() => {
    const handleResizeIcon = () => {
      if (window.innerWidth <= 480) {
        setIconSize(100);
      } else {
        setIconSize(150);
      }
    };

    handleResizeIcon();
    window.addEventListener("resize", handleResizeIcon);
    return () => window.removeEventListener("resize", handleResizeIcon);
  }, [])

  const renderIcon = () => {
    switch (iconType) {
      case "book" : return <BookA stroke-width="1.7" size={isconSize} color="#DAA520" />;
      case "map" : return <MapPinned stroke-width="1.7" size={isconSize} color="#DAA520" />;
      case "route" : return <Route stroke-width="1.7" size={isconSize} color="#DAA520" />;
    }
  }
  return (
    <div className="service-card">
      <div className="service-card__info">
        <div className="service-card__info__icon">
          { renderIcon() }
        </div>
        <div className="service-card__info__title">
          {title}
        </div>
        <div className="service-card__info__line"></div>
        <div className="service-card__info__description">
          {description}
        </div>
      </div>
      <div className="service-card__moveTo-button">
        <ButtonComponent text={buttonText} moveTo={moveTo}/>
      </div>
    </div>
  )
}

export default ServiceCardComponent;