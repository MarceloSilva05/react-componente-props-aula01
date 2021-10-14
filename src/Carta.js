import React from 'react';

export default function Carta(props){
    return (
    <div>
    <p>Olá {props.remetente}-{props.destino}</p>
    </div>
    )
}