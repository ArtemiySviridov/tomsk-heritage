import ServiceCardComponent from "../../components/service-card-component/ServiceCardComponent.tsx";
import './AboutProjectPage.scss';

const AboutProjectPage = () => {
  return (
    <div className="about-project">
      <div className="about-project__content">
        <div className="about-project__content__heading">
          <div className="about-project__content__heading__title">
            Цифровое сохранение культурного наследия<br/>Томска
          </div>
          <div className="about-project__content__heading__description">
            «Город — это не только стены, но и люди, которые их помнят»
          </div>
        </div>
        <div className="about-project__content__information">
          <div className="about-project__content__information__tomsk-text">
            <span className="tomsk">Томск</span> — город, где каждое здание рассказывает свою историю. Мы сохраняем эти истории, чтобы они жили в
            памяти будущих поколений. Наш проект помогает сохранить уникальное архитектурное наследие этого места, делая
            его доступным для всех в цифровом формате.
          </div>
          <div className="about-project__content__information__our-mission">
            <div className="about-project__content__information__our-mission__header">
              Наша миссия
            </div>
            <div className="about-project__content__information__our-mission__content">
              <div className="about-project__content__information__our-mission__content__string">
                <span className="star0">*</span> Оцифровываем ускользающую красоту старинных зданий
              </div>
              <div className="about-project__content__information__our-mission__content__string">
                <span className="star0">*</span> Возвращаем к жизни забытые страницы архитектурной летописи
              </div>
              <div className="about-project__content__information__our-mission__content__string">
                <span className="star0">*</span> Создаем живой диалог между прошлым и настоящим
              </div>
            </div>
          </div>
          <div className="about-project__content__information__services">
            <div className="about-project__content__information__services__title">
              Присоединяйтесь к нам и путешествуйте по истории города!
            </div>
            <div className="about-project__content__information__services__services-list">
              <ServiceCardComponent
                title="Цифровой архив"
                description="Изучайте историю каменного и деревянного зодчества в удобном и интересном формате"
                moveTo="/pointsCatalog"
                buttonText="Открыть каталог"
                iconType="book"
              />
              <ServiceCardComponent
                title="Маршруты"
                description="Тематические прогулки по историческим местам"
                moveTo="/pointsCatalog"
                buttonText="Выбрать маршрут"
                iconType="map"
              />
              <ServiceCardComponent
                title="Интерактивная карта"
                description="Узнавайте, где находятся сохранившиеся и утраченные памятники архитектуры Томска"
                moveTo="/map"
                buttonText="Посмотреть карту"
                iconType="route"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProjectPage;