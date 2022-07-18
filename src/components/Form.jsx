import React from "react";
export default function FormData()
{
    const [formData, setFormData] = React.useState({
        name : "",
        age : "",
         time: "",
        date : "",
        gender: ""
    })



    const handleChange = (event) => {
        var {name,value} = event.target;
        
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (event,formData) => {
        event.preventDefault();
        // console.log(formData);
        addEmployeeToDB(formData);
        setFormData({
            name : "",
         age : "",
          time: "",
         date : "",
         gender: ""
           
        })

    }
    const {name, age, time,date,gender} = formData
    const data={
        name,
        age,
        time,
        date,
        gender

    }


        const addEmployeeToDB = async () => {
        try {
            await fetch(`http://localhost:8080/data`,{
                method : "POST",
                body : JSON.stringify(data),
                headers : {"Content-Type" : "application/json"}
            });
    
        } catch (error) {
            console.log(error);
            
        }
    }


    return (

        <div>
        <h4> Fill FORM Details</h4>
        <form onSubmit={(e)=>handleSubmit(e,formData)}>
            <label>Name<input value={name} onChange={handleChange} name="name" type="text" placeholder="Enter Your Full Name" /></label>
            <label>Age<input value={age} onChange={handleChange} name="age" type="number" placeholder="Enter Your Age"/></label>
            <label>Time<input value={time} onChange={handleChange} name="time" type="text" placeholder="Enter Your Time"/></label>
            <label>Date <input value={date} onChange={handleChange} name="date" type="number" placeholder="Enter Your Date"/></label>
            <label>Gender <input value={gender} onChange={handleChange} name="gender" type="text" placeholder="Enter Your Gender"/></label>
            <input id="submitBtn" type="submit" />
        </form>
    </div>
    )
}