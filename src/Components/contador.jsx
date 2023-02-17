import React, { useState } from "react";
import { DivContador } from "../styled/styled";

export default function Contador() {
    const [caracteres, setCaracteres] = useState(0);

    return (
        <DivContador>
            <div className="contador">
                    <p>Character Length</p>
                    <p>{caracteres}</p>
                </div>
                <div className="inputrange">
                    <input type="range" min={0} max={25} value={caracteres} onChange={(e) => setCaracteres(e.target.value)} />
            </div>
        </DivContador>
    )
}