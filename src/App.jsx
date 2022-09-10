import "./App.scss";

// components;
import Header from "./components/Header";
import Hero from "./components/Hero";
import ExperienceList from "./components/ExperiencesList";
import JokeList from "./components/JokeList";
import TravelList from "./components/TravelList";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="online-experiences">
          <Header />
          <Hero />
          <ExperienceList />
        </div>

        <div className="jokes-collection">
          <Header />
          <JokeList />
        </div>

        <div className="travel-journal">
          <Header />
          <TravelList />
        </div>
      </div>
    </div>
  );
}

export default App;
