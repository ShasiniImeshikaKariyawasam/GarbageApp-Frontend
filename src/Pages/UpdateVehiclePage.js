import React, { Component } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from 'antd';
import AuthService from '../Services/auth.service';
import './RegisterPage.css';
import axios from 'axios';

function UpdateVehiclePage() {
    const [form] = Form.useForm(); 
    let navigate = useNavigate();
  
    const handleSubmit = (e) => {
      axios.put("http://localhost:8080/api/auth/editVehicle",{e}).then((response)=>{
          message.success("Update Vehicle Details Successfull");
          navigate('/login');
      }).catch((err)=>{
          message.error("Update Vehicle Details Failed");
      });
    };
    return (
        <div className="container">
        <div className="register">
          <div className="register__container">
            <span className="registerTitle">Update Vehicle Details</span>
            <Form className="registerform" onFinish={handleSubmit} form={form}>  
            
            {/* <Form.Item
            name="ownerId"
            rules={[
              { required: true, message: "Please enter your ID!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "long",
                min: 4,
                message: "name must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="OwnerId" className="inputField"></Input>
          </Form.Item> */}
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
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      )
}

export default UpdateVehiclePage