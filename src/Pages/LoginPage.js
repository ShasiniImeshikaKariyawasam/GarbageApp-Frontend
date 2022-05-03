import React, { useEffect } from 'react'
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import './LoginPage.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

function LoginPage() {
  const [form] = Form.useForm();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    axios.post("http://localhost:8080/api/auth/login",e).then((response)=>{
        message.success("Login Successfull");
        navigate('/customerProfilePage');
    }).catch((err)=>{
        message.error("Login Failed");
    });

  };
  return (
    <div className="container">
    <div className="login">
      <div className="login__container">
        <span className="loginTitle">Customer Login</span>
        <Form className="loginform" onFinish={handleSubmit} form={form}>        
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
              Login
            </Button>
          </Form.Item>
         
        </Form>
        <Button type='danger' block >
             <Link to={"/register"} className='link'> Register </Link>
        </Button>
      </div>
    </div>
  </div>
  )
}

export default LoginPage