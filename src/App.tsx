import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Counter from "./components/state/Counter";
import Counter2 from "./components/class/Counter";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "Ali",
    last: "Zafar",
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
      <Container
        styles={{
          border: "1px solid black",
          padding: "0.5rem 3rem 0.5rem 1rem",
          width: "50px",
          margin: "20px auto",
          whiteSpace: "nowrap",
        }}
      />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter2 message="The count is: " />
    </div>
  );
}

export default App;
