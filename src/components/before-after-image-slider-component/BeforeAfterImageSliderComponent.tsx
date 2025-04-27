import React, { useState } from 'react';
import './BeforeAfterImageSliderComponent.scss';
import { UnfoldHorizontal } from 'lucide-react';

interface BeforeAfterImageSliderComponentProps {
  beforeImage?: string,
  afterImage?: string,
}

const BeforeAfterImageSliderComponent: React.FC<BeforeAfterImageSliderComponentProps> = ({ beforeImage, afterImage }) => {
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(e.target.value));
  };

  return (
    <div className="before-after-image-slider">
      <div className="slider-container" style={{ '--position': `${position}%` } as React.CSSProperties }>
        <div className="image-container">
          <img
            className="image-before slider-image"
            src={beforeImage}
            alt="Место до..."
          />
          <img
            className="image-after slider-image"
            src={afterImage}
            alt="Место после..."
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={handleSliderChange}
          className="slider"
          aria-label="Регулировка сравнения изображений до и после"
        />
        <div className="slider-line"></div>
        <div className="slider-button" aria-hidden="true">
          <UnfoldHorizontal strokeWidth="1.2" size="35" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterImageSliderComponent;