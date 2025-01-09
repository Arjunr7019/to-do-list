import React from 'react';
import InputCard from './InputCard';

export default function AddTask() {
    return (
        <>
            <InputCard inputType="text" labelName="Task Name" />
            <InputCard inputType="text" labelName="Description" />
            <InputCard inputType="date" labelName="Dead Line" />
            <div style={{ width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div id='container' style={{ width: "50%" }}>
                    <select id='priority' style={{ borderRadius: "1rem", padding: "0.5rem 1rem", textAlign: "center", width: "100%" }}>
                        <option style={{ textAlign: "start" }} value="high">High</option>
                        <option style={{ textAlign: "start" }} value="medium">Medium</option>
                        <option style={{ textAlign: "start" }} value="low">Low</option>
                    </select>
                    <label id='dropdown' htmlFor="container">Priority</label>
                </div>
                <div style={{ width: "50%", margin: "0 0 0 0.3rem", border: "2px solid gray", borderRadius: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }}>Add</div>
            </div>
        </>
    )
}
