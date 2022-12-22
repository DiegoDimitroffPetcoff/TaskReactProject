import React, {useState} from 'react'
import PropTypes from 'prop-types'



// Este es un COMPONENTE FUNCIONAL
function GreetingF(props) {
//  const [variable, metodo]= useState(valor inicial)
const [age,setage] = useState(29);
const birthdar = () => {
setage( age + 1)
}


  return (
    <div><h1>Hola {props.name}!</h1>
    <p>Tu edad es de {age}</p>
    

    <div><button onClick={birthdar}>CUMPLIR AÄNOS</button></div> 
    </div>
  )
}

GreetingF.propTypes = {
  name: PropTypes.number
}

export default GreetingF
