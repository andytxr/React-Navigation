import React from "react";
import { useParams } from 'react-router-dom'

let Params = props => {

    let { id } = useParams();
    
    return(

        <div className="params">
            <h1>Parâmetro</h1>
            <p>Valor: {id}</p>
        </div>

    )

}

export default Params