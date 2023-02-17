import React  from "react";


export const Fetch = (props) => {

let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response=> response.json())
.then( data=> console.assert(data))
.catch(error=> console.log(error))


    return (
        <div >

ejemplo
`${data}`

        </div>
    );
}