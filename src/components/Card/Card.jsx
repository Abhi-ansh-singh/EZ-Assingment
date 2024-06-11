import "./Card.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={icon} alt="icon" />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
