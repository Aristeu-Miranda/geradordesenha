import React from "react";
import { DivContainer } from "../styled/styled";
import Campos from "./campos";
import Senha from "./senha";

export default function Container () {
    return ( 
        <DivContainer>
            <main>
                <h1>Password Generator</h1>
                <Senha />
                <Campos />
            </main>
        </DivContainer>
    )
}