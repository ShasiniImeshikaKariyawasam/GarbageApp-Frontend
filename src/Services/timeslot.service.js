import axios from "axios";
import authHeader from './auth-header'

const API_URL = "http://localhost:8080/timeslot/";

class TimeslotService {

    createTimeSlot(manager_Id,manager_Username,date,start_time,end_time,booking_limit,num_of_booking){
        return axios.post(API_URL + "createtimeslot", {
          manager_Id,manager_Username,date,start_time,end_time,booking_limit,num_of_booking
        })
    }

    getAllServicetimeslots(){
        return axios.get(API_URL + 'alltimeslots' , { headers: authHeader() } );
    }
}

export default new TimeslotService();