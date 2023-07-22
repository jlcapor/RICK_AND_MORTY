import Card from './Card';

const Cards = ({characters})=> {
   
   return (
      <div>
         {characters.map(personaje => (
            <Card 
               key={personaje.id}
               name = {personaje.name}
               status = {personaje.status}
               species = {personaje.status}
               gender = {personaje.gender}
               origin = {personaje.origin.name}
               image = {personaje.image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
        ))}
      </div>
   )
}

export default Cards