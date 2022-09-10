import "./ExperienceCard.scss";
import star from "/assets/star.svg";

function ExperienceCard({ item }) {
  let badgeText;
  console.log(item);
  if (item.openSpots === 0) {
    badgeText = "Sold out";
  } else if (item.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card-container">
      <div className="img-container">
        {badgeText && <small className="status-tag">{badgeText}</small>}
        <img src={`/assets/${item.coverImg}`} alt="experience-banner-image" />
      </div>

      <div className="content-container">
        <p className="rating">
          <span className="rated">
            <img src={star} alt="star-icon" /> {item.stats.altrating}
          </span>
          <span className="count"> ({item.stats.reviewCount}) / </span>
          <span className="country-code">{item.location}</span>
        </p>

        <h4>{item.title}</h4>
        <p className="pricing">
          <span className="price">From {item.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
