import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "Krutarth",
      email: "krutarth.798@gmail.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      {userContext.user?.name ? (
        <div>User name is {userContext.user.name}</div>
      ) : (
        <div>User is Logged out.</div>
      )}
      {userContext.user?.email && (
        <div>User email is {userContext.user.email}</div>
      )}
    </div>
  );
};

export default User;
