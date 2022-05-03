import axios from "axios";
import authHeader from './auth-header'

const API_URL = "http://localhost:8080/booking/getbookinglist/1234";

class BookingService {

    getAllAvailableTimeSlots(){
        return axios.get(API_URL + 'alltimeslots' , { headers: authHeader() } );
    }
}

export default new BookingService();