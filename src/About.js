import { useState } from "react";

function About(){
    const [firstName , setFirstName] = useState('Ahmed');
    function changeName (){
        setFirstName('Rabbit');
    }
    return(
        <div className="container">
            <h2>About US , {firstName}</h2>
            {/* <button className="btn btn-danger" onClick={changeName} type="button"> Click Me </button> */}
        </div>

    )
}

export default About;