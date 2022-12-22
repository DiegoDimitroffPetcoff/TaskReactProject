import PropTypes from 'prop-types'
import React, { Component } from 'react'

// Este es un COMPONENTE DE TIPO CLASE
export default class Greeting extends Component {
  constructor(props){
    super(props);
      this.state={
        age:29
      }
    
  }


  render() {
    return (
      <div><h1>HOlA DE VEULTA {this.props.name}</h1>
      <p>Tu edad es de {this.state.age}</p>
      
      <div><button onClick={this.birthdar}>CUMPLIR AÄNOS</button></div>
      </div>

    )
  }

  birthdar = () =>{
    this.setState((prevState)=>(
      {
      age: prevState.age +1
    }
    ))
}
}

Greeting.propTypes = {
name: PropTypes.number,
}