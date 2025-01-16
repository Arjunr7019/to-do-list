import React, { useState, useContext } from 'react';
import InputCard from './InputCard';
import { ListContext } from '../Context/ListContext';
import Services from '../Services/Services';
import { Toaster, toast } from 'sonner';

export default function AddTask() {
    const [taskData, setTaskData] = useState({ taskName: "", description: "", date: "", priority: "high" });
    const { taskList, setTaskList } = useContext(ListContext);

    const AddTask = () => {
        if (taskData.taskName === "" || taskData.description === "" || taskData.date === "") {
            toast.warning('Inputs are Empty')
        } else {
            if (taskList) {
                let check = taskList.find((task) => task.taskName === taskData.taskName)
                // console.log(check)
                if (check) {
                    toast.warning('Task is Already Present')
                } else {
                    // console.log("task added")
                    toast.success('Task Added')
                    Services.getTaskData().then(res => {
                        let task = res;
                        task.push(taskData);
                        setTaskList(task);
                        Services.setTaskData(task)
                    })
                }
            } else {
                // console.log("empty local storage")
                setTaskList([taskData]);
                Services.setTaskData([taskData])
            }
        }
        // console.log(taskData)
    }
    return (
        <>
            <InputCard inputType="text" labelName="Task Name"
                value={taskData.taskName}
                onChange={(e) => setTaskData(val => { return { ...val, taskName: e.target.value } })} />
            <InputCard inputType="text" labelName="Description"
                value={taskData.description}
                onChange={(e) => setTaskData(val => { return { ...val, description: e.target.value } })} />
            <InputCard inputType="date" labelName="Dead Line"
                value={taskData.date}
                onChange={(e) => setTaskData(val => { return { ...val, date: e.target.value } })} />
            <div style={{ width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div id='container' style={{ width: "50%" }}>
                    <select onChange={(e) => setTaskData(val => { return { ...val, priority: e.target.value } })} id='priority' style={{ borderRadius: "1rem", padding: "0.5rem 1rem", textAlign: "center", width: "100%" }}>
                        <option style={{ textAlign: "start" }} value="high">High</option>
                        <option style={{ textAlign: "start" }} value="medium">Medium</option>
                        <option style={{ textAlign: "start" }} value="low">Low</option>
                    </select>
                    <label id='dropdown' htmlFor="container">Priority</label>
                </div>
                <div onClick={() => AddTask()} style={{ width: "50%", margin: "0 0 0 0.3rem", border: "2px solid gray", borderRadius: "1rem", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}>Add</div>
            </div>
            <Toaster position="bottom-center"/>
        </>
    )
}
