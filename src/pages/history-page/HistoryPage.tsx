import { useOutletContext, useParams } from "react-router-dom";
import { pointsOfInterest } from "../../mock-data/mockPoints.ts";
import "./HistoryPage.scss";

interface OutletContextType {
  selectedStageIndex: number;
}

const HistoryPage = () => {
  const { id } = useParams<{ id: string }>(); // Получаем ID точки интереса из URL
  const outletContext = useOutletContext<OutletContextType>();
  const selectedStageIndex = outletContext?.selectedStageIndex ?? 0;

  // Находим точку интереса по ID
  const point = pointsOfInterest.find((p) => p.id === parseInt(id || "0"));
  const historyStages = point?.historyStages || [];

  // Выбираем текущий этап
  const currentStage = historyStages[selectedStageIndex] || {
    year: "",
    title: "Этап не найден",
    text: "Информация об этом этапе отсутствует.",
  };

  return (
    <div className="history-page">
      <div className="history-page__info">
        <div className="history-page__title">{currentStage.title}</div>
        <div className="history-page__text">{currentStage.text}</div>
      </div>
    </div>
  );
};

export default HistoryPage;