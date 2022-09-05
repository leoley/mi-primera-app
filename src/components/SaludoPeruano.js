import React from "react";

function SaludoPeruano(props) {
    console.log(props.name);
    return (
        <div>
            <h2>Habla bateria {props.name},
             tiene {props.edad} años</h2>
        </div>
    );
   
}

export default SaludoPeruano