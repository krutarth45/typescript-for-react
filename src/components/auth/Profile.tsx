export type ProfilerProps = {
  name: string;
};

const Profile = ({ name }: ProfilerProps) => {
  return <div>This is private profile component. Name is {name}</div>;
};

export default Profile;
