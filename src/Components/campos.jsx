import React, { useState, useEffect } from "react";
import { DivCampos } from "../styled/styled";
import Contador from "./contador";
import Botao from "./botao";

export default function Campos(props) {
    const [filtroSelecionado, setFiltroSelecionado] = useState([]);
    const [algumCheckBoxSelecionado, setAlgumCheckBoxSelecionado] = useState([]);
    const [caracteres, setCaracteres] = useState(0);

    //Validação dos checkbox
    useEffect(() => {}, [filtroSelecionado]);
    function checkBoxSelecionado(e) {
        const nomeBox = e.target.id;
        const estaSelecionado = e.target.checked;
        let checkOpcoes = [...filtroSelecionado];


        if(estaSelecionado) {
            switch (nomeBox) {
                case 'maiusculas':
                    checkOpcoes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
                    break;
                case 'minusculas':
                    checkOpcoes.push('abcdefghijklmnopqrstuvwxyz');
                    break;
                case 'numeros':
                    checkOpcoes.push('0123456789');
                    break;
                case 'simbolos':
                    checkOpcoes.push('!@#$%^&*/');
                    break;
                default:
                    break;
            }            
        } else {
            switch (nomeBox) {
                case "maiusculas":
                    checkOpcoes = checkOpcoes.filter(
                        (opcao) => opcao !== "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                        );
                    break;
                case "minusculas":
                    checkOpcoes = checkOpcoes.filter(
                        (opcao) => opcao !== "abcdefghijklmnopqrstuvwxyz"
                        );
                    break;
                case "numeros":
                    checkOpcoes = checkOpcoes.filter(
                        (opcao) => opcao !== "0123456789"
                    );
                    break;
                case "simbolos":
                    checkOpcoes = checkOpcoes.filter(
                        (opcao) => opcao !== "!@#$%^&*/"
                        );
                    break;
                default:
                    break;
            }
        }        
        setAlgumCheckBoxSelecionado(checkOpcoes.length > 0)
        setFiltroSelecionado(checkOpcoes);
    }

    //Função de gerar a senha
    function gerarSenha () {
        if (algumCheckBoxSelecionado && caracteres > 0) {
            let senha = "";
            for (let i = 0; i < caracteres; i++) {
                let opcao = filtroSelecionado[Math.floor(Math.random() * filtroSelecionado.length)];
                senha += opcao.charAt(Math.floor(Math.random() * opcao.length));
            }
            console.log(senha)
            props.atualizaSenha(senha)
        } else {
            alert('Selecione pelo menos 1 checkbox e um numero de caracteres para a senha!')
        }
    }

    return (
        <DivCampos>
            <div className="fundo">
                <Contador caracteres={caracteres} setCaracteres={setCaracteres}/>
                <form>
                    <div>
                        <input type="checkbox" name="maiusculas" id="maiusculas" onChange={checkBoxSelecionado}/>
                        <label htmlFor="maiusculas">Include Uppercase Latters</label>
                    </div>
                    <div>
                        <input type="checkbox" name="minusculas" id="minusculas" onChange={checkBoxSelecionado}/>
                        <label htmlFor="minusculas">Include Lowercase Latters</label>
                    </div>
                    <div>
                        <input type="checkbox" name="numeros" id="numeros" onChange={checkBoxSelecionado}/>
                        <label htmlFor="numeros">Include Numbers</label>
                    </div>
                    <div>
                        <input type="checkbox" name="simbolos" id="simbolos" onChange={checkBoxSelecionado}/>
                        <label htmlFor="simbolos">Include Symbols</label>
                    </div>
                </form>                
                <Botao gerarSenha={gerarSenha} algumCheckBoxSelecionado={algumCheckBoxSelecionado}/>
            </div>
        </DivCampos>
    )
}