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
            <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", fontWeight: 500, color: "#111827", whiteSpace: "nowrap" }}>{name}</td>
            <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#374151", whiteSpace: "nowrap" }}>{date}</td>
            <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#374151", whiteSpace: "nowrap" }}>
                {stringChunks.map((chunk, index) => <p key={index} style={{ padding: "0", margin: "0" }}>{chunk}</p>)}
            </td>
            <td style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", color: "#374151", whiteSpace: "nowrap" }}>
                <div style={priority === "high" ? { paddingX: "2px", borderRadius: "5px", backgroundColor: "#f55e53" } : { paddingX: "2px", borderRadius: "5px", backgroundColor: "#f5ed53" }}>
                    <p style={{ textAlign: "center", color: "white", margin: "0" }}>{priority}</p>
                </div>
            </td>
            <td>
                <input style={{ cursor: "pointer" }} type="checkbox" onChange={() => checked ? setChecked(false) : setChecked(true)} />
            </td>
            {checked ? <td style={{ cursor: "pointer" }} onClick={onClick}>
                <img src={trash} alt="trash-logo" />
            </td> : <></>}
        </tr>
    )
}
