import React, { Component } from 'react'

import { Descriptions } from 'antd';
import { Row, Col } from 'antd';
import AuthService from '../Services/auth.service';

export default class ServiceManagerProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: "",
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            phone_number: "",
            user_name: "",
            // usertype: 1,
            message: "",
            successful: false,
            loggedIn : true

        };
    }


    componentDidMount() {
        this.getUserDetails();
    }

    getUserDetails = () => {
        const currentUser = AuthService.getCurrentUser();

        this.setState({
            id: currentUser.id,
            email: currentUser.email,
            first_name: currentUser.first_name,
            last_name: currentUser.last_name,
            phone_number: currentUser.phone_number,
            user_name: currentUser.user_name,
        });
    };

    render() {
        return (
            <div>
                <Row>
                    <Col span={10} offset={6}>
                        <Descriptions title="User Information">
                            <Descriptions.Item label="User Name">{this.state.user_name}</Descriptions.Item>
                            <Descriptions.Item label="First Name">{this.state.first_name}</Descriptions.Item>
                            <Descriptions.Item label="Last Name">{this.state.last_name}</Descriptions.Item>
                            <Descriptions.Item label="Email">{this.state.email}</Descriptions.Item>
                            <Descriptions.Item label="Phone Number">{this.state.phone_number}</Descriptions.Item>
                        </Descriptions>
                    </Col>
                </Row>

            </div>
        )
    }
}
