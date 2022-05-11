import React, { Component } from 'react'

import { Tabs } from 'antd';

import ProfileNavBar from '../Components/ProfileNavBar';
import VehicleRegisterPage from './VehicleRegisterPage';
import UpdateVehiclePage from './UpdateVehiclePage';
import Vehicles from './Vehicles';
import CustomerProfile from './CustomerProfile';

export default class CustomerProfilePage extends Component {

    render() {

        const { TabPane } = Tabs;
        return (
            <div>
                <ProfileNavBar loggedIn={true}/>
                <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Customer Profile" key="1">
                        <CustomerProfile/>
                    </TabPane>
                    <TabPane tab="Vehicle Registration" key="2">
                        <VehicleRegisterPage/>
                    </TabPane>
                    <TabPane tab="Vehicle Details" key="2">
                        <Vehicles/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
