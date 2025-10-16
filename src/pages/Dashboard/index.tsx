import { getCardContent } from "../../api/card";
import "./Dashboard.scss";

const Dashboard = () => {
  const cardContents = getCardContent();
  return (
    <div className="grid-card">
      {cardContents.map((card, index) => (
        <div key={index} className="card">
          <img src={card.icon} alt={`${card.title} icon`} />
          <p className="card-title">{card.title}</p>
          <h2 className="card-number">{card.number}</h2>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
