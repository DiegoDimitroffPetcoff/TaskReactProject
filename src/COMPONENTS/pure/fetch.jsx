import React, { useState } from "react";


export const Greetingstyled = (props) => {

let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response=> response.json())
.then(data=> console.assert(data))
.catch(error=> console.log(error))


    return (
        <div >

ejemplo
`${data}`

        </div>
    );
}