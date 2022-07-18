import React from "react";
import { Link } from "react-router-dom"






const Appointments = () => {
    
    const [appointmentsDetails, setAppointmentDetails]=React.useState([]);


    const getData = async () => {
        try {
            
            let response = await fetch(`http://localhost:8080/data`);
            let result = await response.json();
            //  console.log(result)
            
            setAppointmentDetails(result)
        } catch (error) {
            console.log(error);
        }
    }
    getData()

    const handleDelete=async(itemId)=>{
        try{
            await fetch(`http://localhost:8080/data/${itemId}`,{
                method:"DELETE",

            })
             getAll() 


        }catch(error)
        {
            console.log(error)
        }
    }

    const getAll=async(itemId)=>{
        try{
            let res= await fetch(`http://localhost:8080/data`)
               let out=await res.json()

        }
        catch(error)
        {
            console.log(error)
        }
    }

    
  
   React.useEffect(()=>{
    getAll();
   },[])

   
    return(
        
        <div>
            {
                appointmentsDetails?.map((item)=>{
                    return(
                       <div>
                        <p>Name : {item.name}</p>
                        <p>Age:{item.age}</p>
                        
                        <Link to={`/appointment/:appointmentId/${item.id}`}>MORE</Link>
                        <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                       </div>
                    )
                })
            }

        </div>



          
    //   <Table>
    //     <thead>
    //     <tr>
    //                 <th>Name</th>
    //                 <th>Age</th>
    //                 <th> Show More Details</th>
    //             </tr>
    //     </thead>

    //     <tbody>
    //             {
    //                 appointmentsDetails?.map((item) => {
    //                     return (
    //                         <tr key={item.id}>
    //                             <td>{item.name}</td>
    //                             <td>$ {item.age}</td>
    //                             <td><Link to={`/appointment/:appointmentId/${item.id}`}>MORE</Link></td>
    //                         </tr>
    //                     )
    //                 })
    //             }
    //         </tbody>
    //   </Table>
    
    )
}
    


export default Appointments