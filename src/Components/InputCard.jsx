import React from 'react';
import '../App.css';

export default function InputCard({labelName,inputType,onChange,value}) {
    return (
        <div className='inputCard' style={{ position: "relative",margin:"1rem 0" }}>
            <input value={value} style={{ padding: "0.5rem", borderRadius: "1rem", width: "80%" }} onChange={onChange} type={inputType} id="inputName" />
            <label style={inputType === "date"||value !== '' ? {left:"5%",top:"-33%",backgroundColor:"white"}:{}} id="inputLabel" htmlFor="inputName">{labelName}</label>
        </div>
    )
}
