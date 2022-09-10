import "./JokeList.scss";

// components
import JokePart from "../JokePart";
import jokesData from "../../jokesData.json";

function JokeList() {
  const jokeElements = jokesData.map((i) => {
    return <JokePart key={i.id} setup={i.setup} punchline={i.punchline} />;
  });

  return <div className="jokes">{jokeElements}</div>;
}

export default JokeList;
