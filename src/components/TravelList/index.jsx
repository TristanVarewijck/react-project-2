import "./TravelList.scss";
import TravelCard from "../TravelCard";

// data
import travelData from "../../travelData.json";

function TravelList() {
  const travelElements = travelData.map((i) => {
    return (
      <li key={i.id}>
        <TravelCard {...i} />
      </li>
    );
  });
  return <ul className="travel-list">{travelElements}</ul>;
}

export default TravelList;
