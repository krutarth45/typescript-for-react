type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <h2>
      {!props.isLoggedIn
        ? "Welcome Guest"
        : `Welcome ${props.name}! You have ${messageCount} unread ${
            messageCount === 1 ? "message" : "messages"
          }`}
    </h2>
  );
};

export default Greet;
