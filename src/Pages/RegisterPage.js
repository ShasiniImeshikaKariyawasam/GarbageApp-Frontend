import React from 'react'
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import './RegisterPage.css';
import axios from 'axios';

function RegisterPage() {
  const [form] = Form.useForm();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    axios.post("http://localhost:8080/api/auth/registration",e).then((response)=>{
        message.success("Registration Successfull");
        navigate('/login');
    }).catch((err)=>{
        message.error("Registration Failed");
    });
  };
  return (
    <div className="container">
    <div className="register">
      <div className="register__container">
        <span className="registerTitle">Customer Registration</span>
        <Form className="registerform" onFinish={handleSubmit} form={form}>  
        <Form.Item
            name="firstName"
            rules={[
              { required: true, message: "Please enter first name!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "string",
                min: 3,
                message: "name must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="Firstname" className="inputField"></Input>
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              { required: true, message: "Please enter last name!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "string",
                min: 3,
                message: "name must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="Lastname" className="inputField"></Input>
          </Form.Item>  
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter email address!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "string",
                min: 3,
                message: "email must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="Email" className="inputField"></Input>
          </Form.Item>    
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Please enter phone number!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "int",
                min: 10,
                message: "phone number must be at least 10 characters",
              },
            ]}
          >
            <Input placeholder="Phonenumber" className="inputField"></Input>
          </Form.Item>
          <Form.Item
            name="userName"
            rules={[
              { required: true, message: "Please enter username!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "string",
                min: 3,
                message: "name must be at least 3 characters",
              },
            ]}
          >
            <Input placeholder="Username" className="inputField"></Input>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please enter password!" },
              { whitespace: true, message: "field cannot be empty" },
              {
                type: "string",
                min: 6,
                message: "password must be at least 6 characters",
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              className="inputField"
            ></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block >
              register
            </Button>
          </Form.Item>
        </Form>
        <Button type='danger' block >
             <Link to={"/login"} className='link'> Login </Link>
        </Button>
      </div>
    </div>
  </div>
  )
}

export default RegisterPage