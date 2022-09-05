import React from "react";

export default function PropsObject(props) {
    console.log(props.userInfo)
    return (

        <div>
            <h2>Hello  soy {props.userInfo.nombre}
             tengo {props.userInfo.edad} 
             my favorite color is: {props.userInfo.color}</h2>
        </div>

    );
}