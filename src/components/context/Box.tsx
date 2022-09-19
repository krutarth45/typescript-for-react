import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <h2
      style={{
        backgroundColor: theme.primary.main,
        color: theme.primary.text,
        width: "400px",
        margin: "10px auto",
      }}
    >
      Theme Context
    </h2>
  );
};

export default Box;
