import "./ExperienceList.scss";

// components
import ExperienceCard from "../ExperienceCard";
import airbnbData from "../../airbnbData.json";

function ExperienceList() {
  const experiences = airbnbData.map((i) => {
    return (
      <li key={i.id}>
        <ExperienceCard item={i} />
      </li>
    );
  });
  return <ul className="experience-list">{experiences}</ul>;
}

{
}

export default ExperienceList;
