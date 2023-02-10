import React from "react";
import { DivSenha } from "../styled/styled";


export default function Senha() {
    
    return (
        <DivSenha>
            <form>
                    <input className="inputsenha" type="text" name="" id="senhaDefinida" placeholder="P4$5W0rD!"/>
                    <button className="btnCopia" id="copy">Copy</button>
            </form>
        </DivSenha>
    )
}