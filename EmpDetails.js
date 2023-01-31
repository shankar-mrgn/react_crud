import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EmpDetails = () =>{
    const{empid}=useParams();

    const[empdata,empDataChange]=useState({});

    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            empDataChange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    })
    return(
        
        <div>
            <div className="card" style={{"textAlign":"left"}}>
                <div className="card-title">
                    <h2>Employee Detail</h2>
                </div>
                <div className="card-body">
                    { empdata &&
                        <h4>The Employee name is {empdata.name} ({empdata.id})</h4>

                    }<br/>
                    {
                        <h4>Contact: {empdata.phone}</h4>
                    }<br/>
                    {
                        <h4>Email: {empdata.email}</h4>
                    }<br/>
                    {
                        <h4>Status: {empdata.active}</h4>
                    }
                    
                </div>
            </div>
            
            <Link to="/" className="btn btn-danger">Back</Link>
        </div>
    );
}

export default EmpDetails;