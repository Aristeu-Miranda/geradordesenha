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
p {
    color: red;
}
`


