import React from 'react'
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import './RegisterPage.css';
import axios from 'axios';

function VehicleRegisterPage() {
  const [form] = Form.useForm(); 
  let navigate = useNavigate();
  

  const handleSubmit = (e) => {
    axios.post("http://localhost:8080/api/auth/addVehicle",e).then((response)=>{
        message.success("Vehicle Registration Successfull");
        navigate('/customerProfilePage');
    }).catch((err)=>{
        message.error("Registration Failed");
    });
    form.current.reset(); 
  };
  return (
    <div className="container">
    <div className="register">
      <div className="register__container">
        <span className="registerTitle">Vehicle Registration</span>
        <Form className="registerform" onFinish={handleSubmit} form={form}>  
        <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "string",
                min: 5,
                message: "email must be at least 5 characters",
              },
            ]}
          >
            <Input placeholder="Email" className="inputField"></Input>
          </Form.Item>
          <Form.Item
            name="type"
            rules={[
              { required: true, message: "Please enter vehicle type!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "string",
                min: 3,
                message: "name must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="Type" className="inputField"></Input>
          </Form.Item>  
          <Form.Item
            name="vehicleNum"
            rules={[
              { required: true, message: "Please enter vehicle number!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "string",
                min: 4,
                message: "email must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="VehicleNum" className="inputField"></Input>
          </Form.Item>    
          
          <Form.Item>
            <Button type="primary" htmlType="submit" block >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
  )
}

export default VehicleRegisterPage