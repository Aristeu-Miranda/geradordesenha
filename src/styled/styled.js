import styled from "styled-components";

export const DivContainer = styled.main`
main {
    width: 464px;
    height: 500px;
    margin: 7% auto auto auto;
}

h1 {
    text-align: center;
    color: #FFF;
    font-weight: 400;
    font-size: 1em;
    line-height: 21.12px
}
`

export const DivSenha = styled.div`
form {
    display: inline-block;
    background-color: #282631;
    width: 100%;
    height: 49px;
    margin-top: 30px;
}

.inputsenha {
    width: 85%;
    height: 49px;
    border: none;
    background-color: #282631;
    padding-left: 30px;
    font-size: 24px;
    line-height: 31.68px;
    font-weight: 400;
    color: #FFF;
}

.inputsenha::placeholder {
    color: #616066;
    font-size: 24px;
    line-height: 31.68px;
    font-weight: 400;
}

.btnCopia {
    border: none;
    color: #ADFFB3;
    font-weight: 700;
    width: 15%;
    height: 80%;
    background-color: #282631;
    vertical-align: top;
    border-left: 1px solid #ADFFB3;
    cursor: pointer;
}

.btnCopia:hover {
    border: solid 1px #ADFFB3;
}

.btnCopia:focus {
    font-weight: bold;
    font-size: 15px;
}form {
    display: inline-block;
    background-color: #282631;
    width: 100%;
    height: 49px;
    margin-top: 30px;
}

.inputsenha {
    width: 85%;
    height: 49px;
    border: none;
    background-color: #282631;
    padding-left: 30px;
    font-size: 24px;
    line-height: 31.68px;
    font-weight: 400;
    color: #FFF;
}

.inputsenha::placeholder {
    color: #616066;
    font-size: 24px;
    line-height: 31.68px;
    font-weight: 400;
}

.btnCopia {
    border: none;
    color: #ADFFB3;
    font-weight: 700;
    width: 15%;
    height: 80%;
    background-color: #282631;
    margin-top: 5px;
    vertical-align: top;
    border-left: 1px solid #ADFFB3;
    cursor: pointer;
}

.btnCopia:hover {
    border: solid 1px #ADFFB3;
}

.btnCopia:focus {
    font-weight: bold;
    font-size: 15px;
}
`

export const DivCampos = styled.div`
.fundo {
    width: 100%;
    height: 398px;
}

.contador {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
    background-color: #282631;
    padding: 20px;  
}

p {
    background-color: #282631;
}

.contador > p:first-of-type {
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    line-height: 21.12px;
    margin-right: 215px;
    padding-top: 10px;
}

.contador > p:last-of-type {
    color: #ADFFB3;
    font-weight: 400;
    font-size: 2em;
    line-height: 42.24px;
}

.inputrange {
    background-color: #282631;
    padding: 0 30px 0 25px;
}

.inputrange > input {
    -webkit-appearance: none;
    width: 100%;
    background-color: #161323;
    height: 5px;
    vertical-align: top;
    cursor: pointer;
}

.inputrange > input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: #D9D9D9;
    border-radius: 50%;
    cursor: pointer;
}

form {
    padding-top: 30px;
    background-color: #282631;
}

form > div {
    width: 100%;
    background-color: #282631;
    padding-left: 25px;
    margin-bottom: 10px;
}

form > div:last-of-type {
    margin-bottom: 0px;
}

form > div > input {
    width: 14px;
    height: 14px;
    accent-color: #282631;
}

label {
    background-color: #282631;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 18.48px;
    vertical-align: top;
    margin-left: 10px;
}

.contorno-forca {
    padding: 30px 25px 0px 25px;
    background-color: #282631;
    height: 140px;
}

.forca {
    background-color: #161323;
    display: flex;
    justify-content: space-around;
    height: 41px;
}

.txt-forca{
    display:inline-block;
    background-color: #161323;
    color: #fff;
    margin-right: 100px;
    padding-top: 12px;
}

.txt-forca > p {
    background-color: #161323;
    font-size: 12px;
    font-weight: 400;
    line-height: 15.84px;
}

.valores-forca {
    background-color: #161323;
    width: 45px;
    margin-left: 100px;
    display: flex;
    justify-content: space-between;
    padding: 11px 5px 5px 5px;
}

.valor-forca {
    background-color: #161323;
    border: 1px solid #fff;
    width: 6px;
    height: 17px;
}

.generate {
    width: 100%;
    height: 41px;
    margin-top: 15px;
}

.generate > button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #ADFFB3;
    font-size: 12px;
    font-weight: 700;
    line-height: 15.84px;
    color: #000000;
    cursor: pointer;
    transition: 0.5s;
}

.generate > button:hover {
    background-color: #70B075;
}
`


