import './OurTeamPage.scss';
import TeamMemberCardComponent from "../../components/team-member-card-component/TeamMemberCardComponent.tsx";

const OurTeamPage = () => {
  return (
    <div className="our-team">
      <div className="our-team__title">
        Наша команда
      </div>
      <div className="our-team__subtitle">
        <span className="our-team__subtitle__span">Мы</span> — студенты ТГУ и ТПУ, объединившиеся, чтобы сохранить архитектурное наследие Томска в цифровом формате
      </div>
      <div className="our-team__members-list">
        <TeamMemberCardComponent teamMember="Ksenia" subtitle="Системный аналитик" title="Платонова Ксения" description="Продумывает, как должна работать платформа, и делает её понятной и удобной для пользователей" />
        <TeamMemberCardComponent teamMember="Daniil" subtitle="Контентмейкер" title="Бехтольд Даниил" description="Ищет, анализирует и оформляет исторические материалы" />
        <TeamMemberCardComponent teamMember="Varvara" subtitle="Дизайнер" title="Кузнецова Варвара" description="Отвечает за визуальный стиль и удобство платформы" />
        <TeamMemberCardComponent teamMember="Artemiy" subtitle="Frontend-разработчик" title="Свиридов Артемий" description="Реализует функциональность платформы, превращая идеи в работающий продукт" />
      </div>
    </div>
  )
}

export default OurTeamPage;