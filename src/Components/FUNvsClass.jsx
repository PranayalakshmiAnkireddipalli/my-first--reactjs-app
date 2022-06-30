

import React,{Component} from "react";
import '../Styles/Funvslass.css';

export default class ClassComponent extends Component
{
    render()
    {
        return<h3>Welcome to Class Component<br></br><ClassComponent1/></h3>
    }
}

class ClassComponent1 extends Component
{
    render()
    {
        return(
            <div>
                <pre>
                pranayalakshmi <br></br>
                veerareddy<br></br>
                lakshmipranaya<br></br>
                subbareddy <br></br>
                 lakshmidevi
                </pre>
            </div>
        )
    }
}