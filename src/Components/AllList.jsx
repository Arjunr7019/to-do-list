import React, { useContext, useEffect, useState } from 'react'
import ToDoListCard from './ToDoListCard'
import { ListContext } from '../Context/ListContext'
import Services from '../Services/Services';

export default function AllList() {
  const { taskList, setTaskList } = useContext(ListContext);
  const[taskDelete,setTaskDelete] = useState()

  const deleteTask = (index)=>{
    let task = taskList;
    task.splice(index,1);
    Services.getTaskData().then(res=>{
      Services.setTaskData(task)
      setTaskDelete(task);
    })
  }
  useEffect(()=>{
    Services.getTaskData().then(res=>{
      setTaskList(res)
    })
  },[taskDelete])
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
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
            {taskList?.map((data, index) =>
              <ToDoListCard
                name={data.taskName}
                date={data.date}
                description={data.description}
                priority={data.priority}
                onClick={()=>deleteTask(index)}
                key={index}
              />)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
