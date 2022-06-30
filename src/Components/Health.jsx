import React from "react";
import '../Styles/Health.css';
import react from '../assets/react.png';





export default function Health()
{
    return<h2>Welcom to health component<br></br><Image/><br></br><Heart/></h2>
}

function Image(){
    return<img src={react} alt="reactimage" hight={200} width={200}/>
}
function Heart()
{
    return(
        <div>
            <ul>
                <li>health is good</li>
                <li>health is not fine</li>
                <li>health is normal</li>
            </ul>
        </div>
    );
}
