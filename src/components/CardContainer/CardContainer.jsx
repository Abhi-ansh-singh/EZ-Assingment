import { cardData } from "../../config";
import Card from "../Card/Card";
import "./CardContainer.css"

const CardContainer = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
