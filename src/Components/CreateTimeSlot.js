import React, { Component } from 'react'

import { Form, Input, Button, Checkbox, message, DatePicker, TimePicker,InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import AuthService from '../Services/auth.service';
import { Alert } from 'antd';
import ProfileNavBar from '../Components/ProfileNavBar';
import { PageHeader } from 'antd';
import TimeslotService from '../Services/timeslot.service';
const { RangePicker } = DatePicker;

const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
};

export default class CreateServiceTimeslot extends Component {

    constructor(props) {
        super(props);

        this.state = {

            managerId: "",
            managerUsername: "",
            date: "",
            startTime: "",
            endTime: "",
            bookingLimit: 0,
            NumOfBooking: 0,

            successful: false,
            message: ''

        };
    }

    componentDidMount() {
        this.getUserDetails();
    }

    getUserDetails = () => {
        const currentUser = AuthService.getCurrentUser();

        this.setState({
            managerId: currentUser.id,
            managerUsername: currentUser.username,
        });
    };

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    handleDatePickerChange(date, dateString) {
        this.setState({
            date: dateString
        });
      }

    handleStartTimeChange(time, timeString) {
        this.setState({
            startTime: timeString,
        });
    };

    handleEndTimeChange(time, timeString) {
        this.setState({
            endTime: timeString,
        });
    };

    handleBookingLimitChange = (value) => {
        this.setState({
            bookingLimit: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        console.log(
            this.state.managerId,
            this.state.managerUsername,
            this.state.date,
            this.state.startTime,
            this.state.endTime,
            this.state.bookingLimit,
            this.state.NumOfBooking,
        );

        TimeslotService.createTimeSlot(
            this.state.managerId,
            this.state.managerUsername,
            this.state.date,
            this.state.startTime,
            this.state.endTime,
            this.state.bookingLimit,
            this.state.NumOfBooking,

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
                console.log(this.state.message);
            }
        );
    };

    render() {

        if (this.state.successful == true) {
            return (
                <Alert
                    message="Time Slot Creation was Successful"
                    type="success"
                    showIcon
                    action={
                        <Link to={'/timeslotlist'}>
                            <Button size="small" type="text"
                            >
                                Check available Timeslots
                            </Button>
                        </Link>
                    }
                    closable
                />
            )
        }

        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="Create Service Time Slot"
                />
                <div>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 12,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="date-picker"
                            label="DatePicker"
                            {...config}>
                            <DatePicker onChange={(date, dateString) => this.handleDatePickerChange(date, dateString)} />
                        </Form.Item>

                        <Form.Item name="start-time-picker" label="Start Time" {...config}>
                            <TimePicker onChange={(time, timeString) => this.handleStartTimeChange(time, timeString)}/>
                        </Form.Item>

                        <Form.Item name="end-time-picker" label="End Time" {...config} >
                            <TimePicker onChange={(time, timeString) => this.handleEndTimeChange(time, timeString)} />
                        </Form.Item>

                        <Form.Item label="Booking Limit">
                            <Form.Item 
                            name="bookingLimit"
                             noStyle
                             rules={[
                                {
                                    required: true,
                                    message: 'Please input Booking Limit!',
                                },
                            ]}>
                                <InputNumber min={1} max={10} onChange={(value) => this.handleBookingLimitChange(value)} />
                            </Form.Item>
                            <span className="ant-form-text"> Vehicles per slot</span>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
                                Create Time Slot
                            </Button>
                        </Form.Item>
                    </Form>

                    {this.state.message && (
                        <Alert
                            message="Submission Error"
                            description={this.state.message}
                            type="error"
                            closable
                        />
                    )}
                </div>
            </div>
        )
    }
}
