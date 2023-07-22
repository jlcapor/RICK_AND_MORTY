const Card = (props) => {
  const { name, status, species, gender, origin, image, onClose } = props;
  return (
    <div>
      <img src={image} alt="" />
      <h2>Name: {name}</h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Card;
