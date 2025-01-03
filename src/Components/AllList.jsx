import React from 'react'
import ToDoListCard from './ToDoListCard'

export default function AllList() {
    const data = [
        {name:"instagram",date:"01/01/2025",description:"watching reels",priority:"high"},
        {name:"React JS",date:"01/01/2025",description:"Hooks",priority:"low"},
        {name:"Watch Movie",date:"01/01/2025",description:"Martin",priority:"high"}
      ]
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"1rem" }}>
          <div style={{ overflowX: "auto", borderRadius: "0.5rem", borderWidth: "1px", borderColor: "#E5E7EB" }}>
            <table style={{ borderTopWidth: "2px", borderColor: "#E5E7EB", minWidth: "100%", fontSize: "0.875rem", lineHeight: "1.25rem", backgroundColor: "#ffffff" }}>
              <thead style={{ direction: 'ltr', textAlign: 'left' }}>
                <tr>
                  <th style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", fontWeight: 500, color: "#111827", whiteSpace: "nowrap" }}>Task Name</th>
                  <th style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", fontWeight: 500, color: "#111827", whiteSpace: "nowrap" }}>Dead Line</th>
                  <th style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", fontWeight: 500, color: "#111827", whiteSpace: "nowrap" }}>Description</th>
                  <th style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", fontWeight: 500, color: "#111827", whiteSpace: "nowrap" }}>Priority</th>
                </tr>
              </thead>
    
              <tbody style={{ borderTopWidth: "1px", borderColor: "#E5E7EB" }}>
                {data.map((data,index)=> <ToDoListCard name={data.name} date={data.date} description={data.description} priority={data.priority} key={index}/>)}
              </tbody>
            </table>
          </div>
        </div>
  )
}
