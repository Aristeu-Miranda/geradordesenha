import React, { useState } from "react";
import { DivSenha } from "../styled/styled";


export default function Senha(props) {
    // eslint-disable-next-line no-unused-vars
    const [valorInput, setValorInput] = useState("");

    const mudandoNoInput = (e) => { //Definindo o estado do input como local
        setValorInput(e.target.value);
    };

    const copiarSenha = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(props.senha); //API do JS
        alert("Senha copiada para a área de transferência.");
    };


    return (
        <DivSenha>
            <form>
                    <input className="inputsenha" type="text" id="senhaDefinida" 
                           placeholder="P4$5W0rD!" value={props.senha}
                           onChange={mudandoNoInput}/>
                    <button className="btnCopia" id="copy" onClick={copiarSenha}>Copy</button>
            </form>
        </DivSenha>
    )
}

