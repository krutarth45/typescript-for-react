type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  return (
    <h2>
      {!props.isLoggedIn
        ? "Welcome Guest"
        : `Welcome ${props.name}! You have ${props.messageCount} unread ${
            props.messageCount === 1 ? "message" : "messages"
          }`}
    </h2>
  );
};

export default Greet;
