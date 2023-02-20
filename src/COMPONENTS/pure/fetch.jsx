import React  from "react";


export const Fetch = (props) => {

let url = 'https://nestjstuits.onrender.com/'
fetch(url)
.then(response=> response.json())
.then( data=> console.assert(data))
.catch(error=> console.log(error))


    return (
        <div >

ejemplo
<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>


        </div>
    );
}