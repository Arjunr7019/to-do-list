import React, { useState } from 'react';
import trash from '../Images/bx-trash.svg';

export default function ToDoListCard({ name, date, description, priority, onClick }) {
    const [checked, setChecked] = useState(false)

    function splitStringByWords(str, maxLineLength) {
        if (!str || maxLineLength <= 0) return [];

        const words = str.split(" "); // Split string into words
        const lines = [];
        let currentLine = "";

        words.forEach((word) => {
            // Check if adding this word exceeds the max line length
            if ((currentLine + word).length <= maxLineLength) {
                currentLine += (currentLine ? " " : "") + word;
            } else {
                // Add the current line to the result and start a new line
                lines.push(currentLine);
                currentLine = word;
            }
        });

        // Push the last line
        if (currentLine) {
            lines.push(currentLine);
        }

        return lines;
    }


    const stringChunks = splitStringByWords(description, 30);

    return (
        <tr style={checked ? { textDecoration: "line-through" } : {}}>
            <td style={{ padding:"0.5rem", fontWeight: 500, color: "#111827" }}>{name}</td>
            <td style={{ padding:"0.5rem", color: "#374151" }}>{date}</td>
            <td style={{ padding:"0.5rem", color: "#374151" }}>
                {stringChunks.map((chunk, index) => <p key={index} style={{ padding: "0", margin: "0" }}>{chunk}</p>)}
            </td>
            <td style={{ padding:"0.5rem", color: "#374151" }}>
                <div style={priority === "high" ? { paddingX: "2px", borderRadius: "5px", backgroundColor: "#f55e53" } : { paddingX: "2px", borderRadius: "5px", backgroundColor: "#f5ed53" }}>
                    <p style={{ textAlign: "center", color: "white", margin: "0" }}>{priority}</p>
                </div>
            </td>
            <td style={{padding:"0.5rem"}}>
                <input style={{ cursor: "pointer" }} type="checkbox" onChange={() => checked ? setChecked(false) : setChecked(true)} />
            </td>
            {checked ? <td style={{ cursor: "pointer" }} onClick={onClick}>
                <img src={trash} alt="trash-logo" />
            </td> : <></>}
        </tr>
    )
}
