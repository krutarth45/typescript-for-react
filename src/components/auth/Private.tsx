import LoggedIn from "./LoggedIn";
import { ProfilerProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfilerProps>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Krutarth" />;
  }
  return <LoggedIn />;
};

export default Private;
