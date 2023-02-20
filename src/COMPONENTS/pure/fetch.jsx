import React  from "react";


export const Fetch = (props) => {

let url = 'https://nestjstuits.onrender.com/'
fetch(url)
.then(response=> response.json())
.then( data=> console.assert(data))
.catch(error=> console.log(error))


    return (
        <div >

<h1>ejemplo</h2>



        </div>
    );
}