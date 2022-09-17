import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "John", last: "Cena" },
    { first: "Princess", last: "Diana" },
  ];
  return (
    <div className="App">
      <Greet name="Krutarth" messageCount={4} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
