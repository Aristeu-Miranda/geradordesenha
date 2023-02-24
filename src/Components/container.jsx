import React, { useState } from "react";
import { DivContainer } from "../styled/styled";
import Campos from "./campos";
import Senha from "./senha";

export default function Container () {
   const [senha, setSenha] = useState("");

   function atualizaSenha(novaSenha) {
    setSenha(novaSenha)
   }

    return ( 
        <DivContainer>
            <main>
                <h1>Password Generator</h1>
                <Senha senha={senha}/>
                <Campos atualizaSenha={atualizaSenha}/>
            </main>
        </DivContainer>
    )
}