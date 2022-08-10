const Types = ({ types }) => {
  return (
    <ul>
      {types.map((type) => (
        <li key={type.type.name}>{type.type.name}</li>
      ))}
    </ul>
  );
};

export default Types;
