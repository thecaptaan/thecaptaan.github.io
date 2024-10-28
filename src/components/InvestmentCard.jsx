import "./styles/Investment.css";
export default function InvestmentCard(investment) {
  return (
    <div className="investment__card">
      <div className="investment__card__img__container">
        <img
          src={investment.image}
          alt={investment.title}
          className="investment__card__img"
        />
      </div>
      <div className="investment__card__content">
        <div className="investment__card__header">
          <h2>{investment.title}</h2>
        </div>
        <div>
          <p className="investment__card__description">
            {investment.description}
          </p>
          <span className="investment__position__tag">
            {investment.investment__position}
          </span>
        </div>
      </div>
    </div>
  );
}
