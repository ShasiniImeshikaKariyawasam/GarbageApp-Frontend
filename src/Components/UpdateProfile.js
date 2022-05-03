import React, { Component } from 'react'

import { Form, Input, Button } from 'antd';
import AuthService from '../Services/auth.service';
import { Descriptions } from 'antd';
import { Row, Col } from 'antd';
import { Alert } from 'antd';


export default class UpdateProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            email: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            user_name: "",
            message: "",
            successful: false

        };
    }

    componentDidMount() {
        this.getUserDetails();
    }

    getUserDetails = () => {
        const currentUser = AuthService.getCurrentUser();

        this.setState({
            email: currentUser.email,
            first_name: currentUser.first_name,
            last_name: currentUser.last_name,
            phone_number: currentUser.phone_number,
            user_name: currentUser.user_name,
        });
    };

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };
    handleFirstNameChange = (e) => {
        this.setState({
            first_name: e.target.value,
        });
    };
    handleLastNameChange = (e) => {
        this.setState({
            last_name: e.target.value,
        });
    };
    handlePhoneNumberChange = (e) => {
        this.setState({
            phone_number: e.target.value,
        });
    };

    handleUpdate = (e) => {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        AuthService.updateProfile(
            this.state.email,
            this.state.first_name,
            this.state.last_name,
            this.state.password,
            this.state.phone_number,
            this.state.user_name,
        ).then(
            (response) => {
                this.setState({
                    message: response.data.message,
                    successful: true,
                });
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage,
                });
            }
        );
    };


    render() {

        if (this.state.successful == true) {
            return (
              <Alert
                message="Updation Success"
                type="success"
                showIcon
                
                closable
              />
            )
          }


        return (
            <>
           <Row>
            <Col span={8} offset={10}>
            <div>
                <Descriptions>
                    <Descriptions.Item label="UserName">{this.state.user_name}</Descriptions.Item>
                    <Descriptions.Item label="Email">{this.state.email}</Descriptions.Item>
                </Descriptions>
            </div>
            </Col>
            </Row>
            
            <Row>
            <Col span={14} offset={6}>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Enter New Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="First Name"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.handleFirstNameChange}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your First name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.handleLastNameChange}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Last name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone_number"
                        label="Phone Number"
                        value={this.state.phone_number}
                        onChange={this.handlePhoneNumberChange}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="danger" htmlType="submit" onClick={this.handleUpdate}>
                            Update
                        </Button>
                    </Form.Item>
                </Form>
                </Col>
                </Row>

            {this.state.message && (
              <Alert
                message="Registeration Error"
                description={this.state.message}
                type="error"
                closable
              />
            )}
</>
        )
    }
}
