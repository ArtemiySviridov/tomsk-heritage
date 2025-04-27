import './LinkPointPage.scss';
import {pointsOfInterest} from "../../mock-data/mockPoints.ts";
import {useParams} from "react-router-dom";

const LinkPointPage = () => {
  const { id, linkId } = useParams<{ id: string; linkId: string }>();

  const point = pointsOfInterest.find((p) => p.id.toString() === id);

  const link = point?.links?.find((l) => l.id === linkId);

  if (!point || !link) {
    return <div>Ссылка или точка интереса не найдена</div>;
  }

  return (
    <div className="link-point">
      <div className="link-point__title">
        { link.title }
      </div>
      <div className="link-point__photo">
        { link.photo }
      </div>

      <div className="link-point__info">
        {link.info.map((infoItem, index) => (
          <div key={index} className="link-point__info__item">
            <div className="link-point__info__item__subtitle">{infoItem.subtitle}</div>
            <div className="link-point__info__item__text">{infoItem.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LinkPointPage;