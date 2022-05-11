import React from 'react'
import { Form, Input, Button, message, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import './RegisterPage.css';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';


function Vehicles() {
  const [form] = Form.useForm(); 
  let navigate = useNavigate();

  const editRoute = () =>{ 
    let path = `/updateVehicle`; 
    navigate(path);
  }

  const [vehicleDetails, setVehicleDetails] = useState([]);

  useEffect(() => {
    handleSubmit();
}, []);

  const handleSubmit = (e) => {
    axios.get("http://localhost:8080/api/auth/vehicles",e).then((response)=>{
        message.success("Retrieved Vehicle Details Successfull");
    //    console.log(response);
       if(response.data !== null) {
           setVehicleDetails(response.data);
       }
    }).catch((err)=>{
        message.error("Retrieval Failed");
    });
  };

  const email = {
    title: 'Email',
    render: (_, record) => {
        return (
          <div className="ky_column">
            <div>{record.email}</div>
          </div>
        );
      },
  
  }

  const type = {
    title: 'Type',
    render: (_, record) => {
        return (
          <div className="ky_column">
            <div>{record.type}</div>
          </div>
        );
      },
  }

  const vehicleNum = {
    title: 'Vehicle Number',
    render: (_, record) => {
        return (
          <div className="ky_column">
            <div>{record.vehicleNum}</div>
          </div>
        );
      },
    }

  const edit = {
    title: '',
    render: (_, record) => {
        return (
          <div className="ky_column">
            <div>
            <Button type="primary" htmlType="submit" onClick={editRoute} block >
              Edit
            </Button>
            </div>
          </div>
        );
      },
  
  }

  const columns = [
    email,type,vehicleNum,edit
  ];

  return (
    <div className="container">
    <div className="register">
      <div className="register__container">
        <span className="registerTitle">Vehicle Details</span>

         <Table dataSource={vehicleDetails}  columns={columns} rawKey="ownerId" />
      </div>
    </div>
  </div>
  )
}

export default Vehicles