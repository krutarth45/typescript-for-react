type PersonListProps = { names: { first: string; last: string }[] };

const PersonList = (props: PersonListProps) => {
  return (
    <>
      {props.names.map((name, index) => (
        <h2 key={index}>
          {name.first} {name.last}
        </h2>
      ))}
    </>
  );
};

export default PersonList;
