import React from "react";
import { DivCampos } from "../styled/styled";
import Filtro from "./filtro";
import Contador from "./contador";
import Botao from "./botao";

export default function Campos() {
    return (
        <DivCampos>
            <div className="fundo">
                <Contador />
                <Filtro />
                <Botao />
            </div>
        </DivCampos>
    )
}