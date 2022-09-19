import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoggedIn = () => setIsLoggedIn(true);
  const handleLoggedOut = () => setIsLoggedIn(false);
  return (
    <div>
      <button onClick={handleLoggedIn}>Log In</button>
      <button onClick={handleLoggedOut}>Log Out</button>
      <div>User is {isLoggedIn ? "logged in." : "logged out."}</div>
    </div>
  );
};

export default LoggedIn;
