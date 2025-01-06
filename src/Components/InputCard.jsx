import React from 'react';
import '../App.css';

export default function InputCard({labelName,inputType}) {
    return (
        <div className='inputCard' style={{ position: "relative",margin:"1rem 0" }}>
            <input style={{ padding: "0.5rem", borderRadius: "1rem", width: "80%" }} type={inputType} id="inputName" />
            <label style={inputType === "date" ? {left:"5%",top:"-33%",backgroundColor:"white"}:{}} id="inputLabel" htmlFor="inputName">{labelName}</label>
        </div>
    )
}
