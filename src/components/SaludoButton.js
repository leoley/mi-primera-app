import React from "react";

export default function SaludoButton(props) {
    const { userInfo, saludarFn } = props
    const { nombre = "Anonimo", edad } = userInfo
    console.log(props)
    console.log(userInfo)
    console.log(nombre)
    return (
        <div>
            <button onClick={
                () => saludarFn(nombre, edad)}>
                SALUDAR
            </button>
        </div>
    );
}