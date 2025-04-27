import {Outlet, useParams} from "react-router-dom";
import './HistoryLayout.scss';
import Header from "../../components/header/Header.tsx";
import {useState} from "react";
import {pointsOfInterest} from "../../mock-data/mockPoints.ts";

const HistoryLayout = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  const point = pointsOfInterest.find((p) => p.id.toString() === id);

  // Используем historyStages из точки интереса или пустой массив, если точка не найдена
  const historyStages = point?.historyStages || [];

  // Если точка не найдена, отображаем сообщение
  if (!point) {
    return <div>Точка интереса не найдена</div>;
  }

  return (
    <div className="history-layout">
      <div className="history-layout__header">
        <Header />
      </div>
      <main className="history-layout__body">
        <Outlet context={{ selectedStageIndex }} />
      </main>
      <div className="history-layout__footer">
        <div className="timeline">
          <div className="timeline__line"/>
          <div className="timeline__buttons">
            {historyStages.map((stage, index) => (
              <button
                key={stage.year}
                className={`timeline__button ${index === selectedStageIndex ? 'active' : ''}`}
                onClick={() => setSelectedStageIndex(index)}
              >
                <span className="timeline__year">{stage.year}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryLayout;