import React from 'react';
import { useParams } from "react-router-dom";

const Parm = props => {
    const { id } = useParams();
    return (
        <div className="Parm">
            <h1>Parâmetro</h1>
            <h3><i>Valor: {id}!!!</i></h3>
        </div>
    )
}

export default Parm;