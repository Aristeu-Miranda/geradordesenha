import React from "react";
import { DivCampos } from "../styled/styled";

export default function Campos() {
    return (
        <DivCampos>
            <div className="fundo">
                <div className="contador">
                    <p>Character Length</p>
                    <p>0</p>
                </div>
                <div className="inputrange">
                    <input type="range" min={0} max={25} />
                </div>
                <form>
                    <div>
                        <input type="checkbox" name="" id="uppercase" />
                        <span className="check"></span>
                        <label htmlFor="uppercase">Include Uppercase Latters</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="lowercase" />
                        <span className="check"></span>
                        <label htmlFor="lowercase">Include Lowercase Latters</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="checkbox-numbers" />
                        <span className="check"></span>
                        <label htmlFor="checkbox-numbers">Include Numbers</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="checkbox-symbols" />
                        <span className="check"></span>
                        <label htmlFor="checkbox-symbols">Include Symbols</label>
                    </div>
                </form>
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
            </div>
        </DivCampos>
    )
}