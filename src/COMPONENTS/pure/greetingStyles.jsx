import React, { useState } from "react";



//estilo para usuario no logeado

const loggedStyle = {
    color: "white"
};

const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold"
};

export const Greetingstyled = (props) => {

    //Genero un estado para el componente
    //y controlar si el usaurio esta o no logeado

    const [logged, setLogged] = useState(false)


    return (
        <div style={logged ? loggedStyle : unloggedStyle}>

            {logged 
            ? 
            (<p>Hola {props.name}</p>) 
            : (<p>Por favor Logeate</p>)}

            <button onClick={() => {
                console.log("boton pulsado")
                setLogged(!logged);
            }}>
                {logged ? "Logout" : "Login"}
            </button>

        </div>
    );
}