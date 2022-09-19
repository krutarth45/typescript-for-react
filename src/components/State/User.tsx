import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLoggedIn = () => {
    setUser({
      name: "krutarth",
      email: "krutarth.798@gmail.com",
    });
  };
  const handleLoggedOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLoggedIn}>Log In</button>
      <button onClick={handleLoggedOut}>Log Out</button>
      <div>{user?.name && `User name is ${user.name}`} </div>
      <div>{user?.email && `User name is ${user.email}`} </div>
    </div>
  );
};

export default User;
