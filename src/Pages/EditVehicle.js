import React, { Component } from 'react'

import { Form, Input, Button } from 'antd';
import AuthService from '../Services/auth.service';
import { Row, Col } from 'antd';
import { Alert } from 'antd';


export default class EditVehicle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            owner_id: "",
            type: "",
            vehicle_num: "",
            message: "",
            successful: false
        };
    }

    componentDidMount() {
        this.getVehicleDetails();
    }

    getVehicleDetails = () => {
        const currentVehicle = AuthService.getCurrentVehicle();

        this.setState({
            owner_id: currentVehicle.owner_id,
            type: currentVehicle.type,
            vehicle_num: currentVehicle.vehicle_num,
        });
    };

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    handleOwnerIdChange = (e) => {
        this.setState({
            owner_id: e.target.value,
        });
    };

    handleTypeChange = (e) => {
        this.setState({
            type: e.target.value,
        });
    };
    handleVehicleNumChange = (e) => {
        this.setState({
            vehicle_num: e.target.value,
        });
    };

    handleUpdate = (e) => {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        AuthService.updateVehicle(
            this.state.owner_id,
            this.state.type,
            this.state.vehicle_num
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
            {/* <div>
                <Descriptions>
                    <Descriptions.Item label="UserName">{this.state.username}</Descriptions.Item>
                    <Descriptions.Item label="Email">{this.state.email}</Descriptions.Item>
                </Descriptions>
            </div> */}
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
                        label="Enter New Owner "
                        name="owner_id"
                        value={this.state.owner_id}
                        onChange={this.handleOwnerIdChange}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Vehicle Type"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleTypeChange}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your vehicle type!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="vehicle_num"
                        label="Vehicle Number"
                        value={this.state.vehicle_num}
                        onChange={this.handleVehicleNumChange}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your vehicle number!',
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
                message="Updating Error"
                description={this.state.message}
                type="error"
                closable
              />
            )}
</>
        )
    }
}
