import './TeamMemberCardComponent.scss';
import React from "react";
import Ksenia from '../../assets/team/ksenia.png'
import Daniil from '../../assets/team/daniil.png'
import Varvara from '../../assets/team/varvara.png'
import Artemiy from '../../assets/team/artemiy.png'

interface TeamMemberCardComponentProps {
  title: string,
  subtitle: string,
  description: string,
  teamMember: string,
}

const TeamMemberCardComponent: React.FC<TeamMemberCardComponentProps> = ({ title, description, subtitle, teamMember }) => {
  const choseTeamMember = () => {
    switch (teamMember) {
      case "Ksenia":
        return <img src={Ksenia} alt="Ксения" className="team-member-card__info__icon__member"/>;
      case "Daniil":
        return <img src={Daniil} alt="Ксения" className="team-member-card__info__icon__member"/>;
      case "Varvara":
        return <img src={Varvara} alt="Ксения" className="team-member-card__info__icon__member"/>;
      case "Artemiy":
        return <img src={Artemiy} alt="Ксения" className="team-member-card__info__icon__member"/>;
    }
  };
  return (
    <div className="team-member-card">
      <div className="team-member-card__info">
        <div className="team-member-card__info__title">
          {subtitle}
        </div>
        <div className="team-member-card__info__icon">
          { choseTeamMember() }
        </div>
        <div className="team-member-card__info__title">
          {title}
        </div>
        <div className="team-member-card__info__line"></div>
        <div className="team-member-card__info__description">
          {description}
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCardComponent;