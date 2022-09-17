import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Ali",
    last: "zafar",
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
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
      <Button
        handleClick={(event, id) => {
          console.log("button clicked ", event, id);
        }}
      />
    </div>
  );
}

export default App;
