const Card = (props) => { // Componente funcional
  const {id,  name, status, species, gender, origin, image, onClose } = props;
  return (
    <div>
      <button onClick={() => onClose(id)}>Cerrar</button>
      <h2>Name: {name}</h2>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>
      <img src={image} alt="" />
    </div>
  );
};

export default Card;
