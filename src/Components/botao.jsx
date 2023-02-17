import React from "react";
import { DivBotao } from "../styled/styled";

export default function Botao(){


    return (
        <DivBotao>
            <div className="contorno-forca">
                <div className="forca">
                    <div className="txt-forca">
                        <p>STRENGHT</p>
                    </div>
                    <div className="valores-forca">
                        <div className="valor-forca"></div>
                        <div className="valor-forca"></div>
                        <div className="valor-forca"></div>
                        <div className="valor-forca"></div>
                    </div>
                </div>
                <div className="generate"> 
                    <button type="submit">GENERATE</button>
                </div>
            </div>
        </DivBotao>
    )
}