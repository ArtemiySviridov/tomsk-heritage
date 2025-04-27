import  './PointOfInterestPage.scss';
import {Link, useParams} from "react-router-dom";
import LinkCardComponent from "../../components/link-card-component/LinkCardComponent.tsx";
import BeforeAfterImageSliderComponent
  from "../../components/before-after-image-slider-component/BeforeAfterImageSliderComponent.tsx";
import {pointsOfInterest} from "../../mock-data/mockPoints.ts";

const PointOfInterestPage = () => {
  const { id } = useParams<{ id: string }>();
  const point = pointsOfInterest.find((point) => point.id === Number(id));

  if (!point) {
    return <div>Точка интереса не найдена!</div>;
  }

  return (
    <div className="point">
      <div className="point__header">
        {point.title}
      </div>
      <div className="point__line-top"></div>
      <div className="point__before-after-slider">
        <div className="point__before-after-slider__title">До и после</div>
        <BeforeAfterImageSliderComponent
          beforeImage={point.beforeAfterImages?.before}
          afterImage={point.beforeAfterImages?.after}
        />
      </div>
      <Link to={`/point/${id}/history/story`} className="point__history-button">
        Проследить историю
      </Link>
      {point.links && point.links.length > 0 && (
        <>
          <div className="point__line"></div>
          <div className="point__links-list">
            <div className="point__list-title">
              Статьи связанные с местом
            </div>
            <div className="point__links">
              {point.links.map((link) => (
                <Link key={link.id} to={`/point/${id}/link/${link.id}`} className="point__links__link">
                  <LinkCardComponent
                    title={link.title}
                    photo={link.photo}
                  />
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
      {point.additionalInfo && point.additionalInfo.length > 0 && (
        <>
          <div className="point__line"></div>
          <div className="point__another-info">
            <div className="point__another-info__title">
              Дополнительная информация
            </div>
            <div className="point__another-info__info-list">
              {point.additionalInfo.map((info, index) => (
                <div key={index} className="point__another-info__info-list__info-item">
                  <div className="point__another-info__info-list__info-item__title">
                    {info.title}
                  </div>
                  <div className="point__another-info__info-list__info-item__text">
                    {info.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PointOfInterestPage;