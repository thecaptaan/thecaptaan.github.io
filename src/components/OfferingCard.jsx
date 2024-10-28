import "./styles/Offering.css";
export default function OfferingCard(offering) {
  return (
    <div className="offering__card">
      <div className="offering__card__img__container">
        <img
          src={offering.image}
          alt={offering.title}
          className="offering__card__img"
        />
      </div>
      <div>
        <div className="offering__card__header">
          <h2>{offering.title}</h2>
        </div>
        <div className="offering__card__content">
          <p>{offering.description}</p>
        </div>
      </div>
    </div>
  );
}
