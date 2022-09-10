import "./TravelCard.scss";

function TravelCard(props) {
  return (
    <div className="travel-card">
      <div className="travel-img-container">
        <img
          src={"/assets/" + props.imageUrl}
          alt={props.location + " photo"}
        />
      </div>

      <div className="travel-content">
        <small className="subheading">
          <span className="location">
            <img src="/assets/location.svg" alt="location-icon" />
            <p>{props.location}</p>
          </span>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            className="google-maps-link"
          >
            View on Google Maps
          </a>
        </small>

        <h1 className="title">{props.title}</h1>
        <h4 className="data-range">
          {props.startDate} - {props.endDate}
        </h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default TravelCard;
