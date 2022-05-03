import axios from "axios";
import authHeader from './auth-header'

const API_URL = "http://localhost:8080/api/auth/";


class AuthService {


    register(email,firstName,lastName,password,phoneNumber,userName){
        return axios.post(API_URL + "registration", {
          email,firstName,lastName,password,phoneNumber,userName
        })
    }

    vehicleRegister(ownerId,type,vehicleNum) {
      return axios.post(API_URL + "addVehicle",{
        ownerId,type,vehicleNum
      })
    }

    login(userName, password) {
        return axios
          .post(API_URL + "login", {
            userName,
            password
          })
          .then(response => {
            console.log(response);
            if (response.data.token) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
          });
      }

      logout() {
        localStorage.removeItem("user");
      }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    getCurrentVehicle() {
      return JSON.parse(localStorage.getItem('vehicle'));
    }

    updateVehicle(owner_id,type,vehicle_num) {
      return axios.put(API_URL + "editVehicle", {
        owner_id,
        type,
        vehicle_num
      }) ;
    }

    updateProfile(username,email,password,name,phone) {
      return axios.put(API_URL + "updateprofile", {
        username,
        email,
        password,
        name,
        phone,
      });
    }
}

export default new AuthService();
