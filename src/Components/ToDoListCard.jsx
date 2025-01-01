import React, { useState } from 'react'

export default function ToDoListCard({ name, date, description, priority }) {
    const[checked ,setChecked] = useState(false)
    
    return (
        <tr style={checked ? {textDecoration:"line-through"} : {}}>
            <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", fontWeight: 500, color: "#111827", whiteSpace: "nowrap" }}>{name}</td>
            <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#374151", whiteSpace: "nowrap" }}>{date}</td>
            <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#374151", whiteSpace: "nowrap" }}>{description}</td>
            <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#374151", whiteSpace: "nowrap" }}>
                <div style={priority === "high" ? { paddingX: "2px", borderRadius: "5px", backgroundColor: "#f55e53" } : { paddingX: "2px", borderRadius: "5px", backgroundColor: "#f5ed53" }}>
                    <p style={{ textAlign: "center", color: "white", margin: "0" }}>{priority}</p>
                </div>
            </td>
            <td>
                <input type="checkbox" onChange={()=> checked ? setChecked(false): setChecked(true)} />
            </td>
        </tr>
    )
}
