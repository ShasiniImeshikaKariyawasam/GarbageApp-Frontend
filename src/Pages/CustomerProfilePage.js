import React, { Component } from 'react'

import { Tabs } from 'antd';

import ProfileNavBar from '../Components/ProfileNavBar';
import VehicleRegisterPage from './VehicleRegisterPage';
import UpdateVehiclePage from './UpdateVehiclePage';
import Vehicles from './Vehicles';

export default class CustomerProfilePage extends Component {

    render() {

        const { TabPane } = Tabs;
        return (
            <div>
                <ProfileNavBar loggedIn={true}/>
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Vehicle Registration" key="1">
                        <VehicleRegisterPage/>
                    </TabPane>
                    <TabPane tab="Update Vehicle Details" key="2">
                        <UpdateVehiclePage/>
                    </TabPane>
                    <TabPane tab="Vehicle Details" key="3">
                        <Vehicles/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}