
import React from 'react';
import '../Styles/Props.css';
const employeedetails=(props)=>
{
    return(
        <div>
        <h3>Welcome {props.name} to our {props.role} department</h3>
        </div>
    );
}

export default employeedetails;