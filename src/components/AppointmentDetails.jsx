import React from "react";
import { useParams } from "react-router-dom";





const AppointmentDetails = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = React.useState([]);
    

    const getData = async () => {
        try {
            
            let response = await fetch(`http://localhost:8080/data/${productId}`);
            let result = await response.json();
            
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getData().then((res) => {
            setProductDetails(res);
            
        })
    }, []);

    return (
        
            <Div>
            <h4>ID : {productDetails.id}</h4>
            <h4>Price : $ {productDetails.time}</h4>
            <h3>{productDetails.gender}</h3>
            <h3>{productDetails.date}</h3>
        </Div>
        )
    
}

export default AppointmentDetails;
