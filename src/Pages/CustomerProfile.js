// import React, { Component } from 'react'

// import { Descriptions } from 'antd';
// import { Row, Col } from 'antd';
// import AuthService from '../Services/auth.service';

// function CustomerProfile() {

//     const [form] = Form.useForm(); 
//     let navigate = useNavigate();

//     const [userDetails, setUserDetails] = useState([]);

//     useEffect(() => {
//         handleSubmit();
//     }, []);
    
//       const handleSubmit = (e) => {
//         axios.get("http://localhost:8080/api/auth/vehicles",e).then((response)=>{
//             message.success("Retrieved Vehicle Details Successfull");
//         //    console.log(response);
//            if(response.data !== null) {
//                setVehicleDetails(response.data);
//            }
//         }).catch((err)=>{
//             message.error("Retrieval Failed");
//         });
//       };


//     render() ;{
//         return (
//             <div>
//                 <Row>
//                     <Col span={10} offset={6}>
//                         <Descriptions title="User Information">
//                             <Descriptions.Item label="User Name">{this.state.userName}</Descriptions.Item>
//                             <Descriptions.Item label="First Name">{this.state.firstName}</Descriptions.Item>
//                             <Descriptions.Item label="Last Name">{this.state.lastName}</Descriptions.Item>
//                             <Descriptions.Item label="Email">{this.state.email}</Descriptions.Item>
//                             <Descriptions.Item label="Phone Number">{this.state.phoneNumber}</Descriptions.Item>
//                         </Descriptions>
//                     </Col>
//                 </Row>

//             </div>
//         )
//     }

// }

// export default CustomerProfile