import React, { Component } from 'react'

import { Table, Tag, Space } from 'antd';
import TimeslotService from '../Services/timeslot.service';


export default class EditTimeslots extends Component {
    constructor(props) {
        super(props);

        this.state = {
            academicYear: "",
            facultyName: "",
            departmentName: "",
            timeslotList: [],
        };
    }

    componentDidMount() {
        // Getting All Faculties
        TimeslotService.getAllServicetimeslots().then(
            (response) => {
                this.setState({
                    timeslotList: response.data,
                });
                console.log(this.state.timeslotList);
            },
            (error) => {
                this.setState({
                    timeslotList:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString(),
                });
            }
        );
    }


    columns = [
        {
            title: 'Time Slot ID',
            dataIndex: 'timeslotid',
            key: 'timeslotid',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Manager Username',
            dataIndex: 'managerusername',
            key: 'managerusername',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Start Time',
            dataIndex: 'starttime',
            key: 'starttime',
        },
        {
            title: 'End Time',
            dataIndex: 'endtime',
            key: 'endtime',
        },
        {
            title: 'Booking Limit',
            dataIndex: 'bookinglimit',
            key: 'bookinglimit',
        },
        {
            title: 'Number of Bookings',
            dataIndex: 'noofbooking',
            key: 'noofbooking',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    render() {

        const data = this.state.timeslotList.map(timeslot => ({
            timeslotid: timeslot.timeslot_id,
            managerusername: timeslot.manager_Username,
            date: timeslot.date,
            starttime: timeslot.start_time,
            endtime: timeslot.end_time,
            bookinglimit: timeslot.booking_limit,
            noofbooking: timeslot.num_of_booking
        }))

        return (
            <div>
                <Table columns={this.columns} dataSource={data} />
            </div>
        )
    }
}
