import React, { Component } from "react";




export class Fetch extends Component {
    constructor() {
        super();


    }

    componentDidMount() {

        let url = 'https://nestjstuits.onrender.com/tuits'
        fetch(url)
            .then(response => {
                return response.json();
    })
        .then(response=> { 
            console.log(response)
        })

        .catch (error=> console.log(error))

    }

    render(){
        return(
            <div>
                Nuevo Fetch con class
            </div>
        )
    }


  
 
  }