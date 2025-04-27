import { Link } from "react-router-dom";
import React from "react";
import './ButtonComponent.scss';

interface ButtonComponentProps {
  text: string;
  moveTo: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, moveTo }) => {
  return (
    <Link to={moveTo} className="button-component">
      { text }
    </Link>
  )
}

export default ButtonComponent;