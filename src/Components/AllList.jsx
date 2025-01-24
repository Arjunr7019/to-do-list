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
    <div style={{ display: "flex", justifyContent: "start", alignItems: "center", marginTop: "1rem",width:"100%" }}>
      <div style={{ borderRadius: "0.5rem", border:"1px solid #E5E7EB",width:"100%" }}>
        <table style={{ borderRadius: "0.5rem",borderTopWidth: "2px", borderColor: "#E5E7EB",width:"100%", fontSize: "0.875rem", lineHeight: "1.25rem", backgroundColor: "#ffffff" }}>
          <thead style={{ direction: 'ltr', textAlign: 'left' }}>
            <tr>
              <th style={{ padding:"0.5rem", fontWeight: 500, color: "#111827" }}>Task Name</th>
              <th style={{ padding:"0.5rem", fontWeight: 500, color: "#111827" }}>Dead Line</th>
              <th style={{ padding:"0.5rem", fontWeight: 500, color: "#111827" }}>Description</th>
              <th style={{ padding:"0.5rem", fontWeight: 500, color: "#111827" }}>Priority</th>
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
