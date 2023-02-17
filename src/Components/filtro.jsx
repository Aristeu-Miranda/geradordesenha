import React, { useEffect, useState } from "react";

import { DivFiltro } from "../styled/styled";

export default function Filtro (){
    const [filtroSelecionado, setFiltroSelecionado] = useState([])

    useEffect(() => {
        console.log(filtroSelecionado)
    }, [filtroSelecionado]);

    function checkBoxSelecionado(e) {
        const nomeBox = e.target.id;
        const estaSelecionado = e.target.checked;
        let checkOpcoes = [...filtroSelecionado];

        if(estaSelecionado === true) {
            switch (nomeBox) {
                case 'maisculas':
                    checkOpcoes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
                    break;
                case 'minusculas':
                    checkOpcoes.push('abcdefghijklmnopqrstuvwxyz');
                    break;
                case 'numeros':
                    checkOpcoes.push('0123456789');
                    break;
                case 'simbolos':
                    checkOpcoes.push('!@#$%^&*/?');
                    break;
                default:
                    break;
            }
        }

        setFiltroSelecionado(checkOpcoes);
    }
    
    
    return (
            <DivFiltro>
                <form>
                    <div>
                        <input type="checkbox" name="" id="maisculas" onChange={checkBoxSelecionado}/>
                        <label htmlFor="maisculas   ">Include Uppercase Latters</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="minusculas" onChange={checkBoxSelecionado}/>
                        <label htmlFor="minusculas">Include Lowercase Latters</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="numeros" onChange={checkBoxSelecionado}/>
                        <label htmlFor="numeros">Include Numbers</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="simbolos" onChange={checkBoxSelecionado}/>
                        <label htmlFor="simbolos">Include Symbols</label>
                    </div>
                </form>
            </DivFiltro>
    )
}