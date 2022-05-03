import React, { Component } from 'react'

import { Tabs } from 'antd';
import ServiceManagerProfile from '../Components/ServiceMangerProfile';
import UpdateProfile from '../Components/UpdateProfile';
import ProfileNavBar from '../Components/ProfileNavBar';
import CreateServiceTimeslot from '../Components/CreateTimeSlot';
import EditTimeslot from '../Components/EditTimeslot';

export default class ServicemanagerProfilePage extends Component {

    render() {

        const { TabPane } = Tabs;
        return (
            <div>
                <ProfileNavBar loggedIn={true}/>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Profile Details" key="1">
                        <ServiceManagerProfile/>
                    </TabPane>
                    <TabPane tab="Update Profile" key="2">
                        <UpdateProfile/>
                    </TabPane>
                    <TabPane tab="Create Service Timeslot" key="3">
                        <CreateServiceTimeslot/>
                    </TabPane>
                    <TabPane tab="View/Edit Service Timeslot" key="4">
                        <EditTimeslot/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
