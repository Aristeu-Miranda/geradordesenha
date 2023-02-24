import React from "react";
import { DivContador } from "../styled/styled";

export default function Contador(props) {

    function tamanhoSenha(e) {
        props.setCaracteres(e.target.value);
      }

    return (
        <DivContador>
            <div className="contador">
                    <p>Character Length</p>
                    <p>{props.caracteres}</p>
                </div>
                <div className="inputrange">
                    <input type="range" min={0} max={25} value={props.caracteres} onChange={tamanhoSenha} />
            </div>
        </DivContador>
    )
}