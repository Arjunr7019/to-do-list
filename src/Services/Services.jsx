const setTaskData = async(value)=>{
    await localStorage.setItem('taskData', JSON.stringify(value));
}
const getTaskData = async()=>{
    const value = await localStorage.getItem('taskData');
    return JSON.parse(value);
}

const config = {
    setTaskData,
    getTaskData
}
export default config;