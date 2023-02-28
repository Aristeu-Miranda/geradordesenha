import React from "react";
import { DivBotao } from "../styled/styled";

export default function Botao({ gerarSenha, algumCheckBoxSelecionado, disabled }) {
  
  function forcaUm() {
    if(algumCheckBoxSelecionado >= 2) {
      return 'fundo-verde';
    } 
    else {
      return 'valor-forca';
    }
  }

  
  return (
    <DivBotao>
      <div className="contorno-forca">
        <div className="forca">
          <div className="txt-forca">
            <p>STRENGHT</p>
          </div>
          <div className="valores-forca">
              <div className={forcaUm()}></div>
              <div className={forcaUm()}></div>
              <div className={forcaUm()}></div>
              <div className={forcaUm()}></div>
          </div>
        </div>
        <div className="generate">
                <button style={disabled ? {backgroundColor: 'gray'} : {}} type="button" onClick={gerarSenha} disabled={disabled}>GENERATE</button>
        </div>
      </div>
    </DivBotao>
  );
}