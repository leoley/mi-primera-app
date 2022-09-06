import React from "react";

export default function SaludoButton(props){

console.log(props.userInfo.nombre)
   
    return(
            <div>
                <button onClick={()=> props.saludarFn(props.userInfo.nombre)}>
                    saludar
                    </button>
            </div>
    );
}