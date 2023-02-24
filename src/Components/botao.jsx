import React from "react";
import { DivBotao } from "../styled/styled";

export default function Botao({ gerarSenha, algumCheckBoxSelecionado }) {
  
  
  

  if(algumCheckBoxSelecionado > 0) console.log("Foi selecionado")
  return (
    <DivBotao>
      <div className="contorno-forca">
        <div className="forca">
          <div className="txt-forca">
            <p>STRENGHT</p>
          </div>
          <div className="valores-forca">
              <div className="valor-forca"></div>
              
          </div>
        </div>
        <div className="generate">
                <button type="button" onClick={gerarSenha}>GENERATE</button>
        </div>
      </div>
    </DivBotao>
  );
}