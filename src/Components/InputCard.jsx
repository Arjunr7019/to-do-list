import React,{useEffect,useState} from 'react';
import '../App.css';

export default function InputCard({labelName,inputType,onChange,value}) {
    const[minDate,setMinDate] = useState()
    useEffect(() => {
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        let date = currentDate.getDate();
        if (month < 10 && date < 10) {
            setMinDate(`${year}-0${month + 1}-0${date}`)
        } else if (month < 10) {
            setMinDate(`${year}-0${month + 1}-${date}`)
        } else if (date < 10) {
            setMinDate(`${year}-${month + 1}-0${date}`)
        } else {
            setMinDate(`${year}-${month + 1}-${date}`)
        }
    }, [])
    return (
        <div className='inputCard' style={{ position: "relative",margin:"1rem 0" }}>
            <input value={value} min={inputType==="date"? minDate : ''} style={{ padding: "0.5rem", borderRadius: "1rem", width: "90%",backgroundColor:"white" }} onChange={onChange} type={inputType} id="inputName" />
            <label style={inputType === "date"||value !== '' ? {left:"5%",top:"-33%",backgroundColor:"white"}:{}} id="inputLabel" htmlFor="inputName">{labelName}</label>
        </div>
    )
}
