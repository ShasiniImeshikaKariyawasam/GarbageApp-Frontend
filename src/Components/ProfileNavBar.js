import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../Services/auth.service';

export default class ProfileNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        };
    }

    logOut = () => {
        AuthService.logout();
      };

    render() {

        if(this.props.loggedIn){
        return (
            <div>
                <nav class="navbar navbar-dark bg-primary"> 
                    <Link to={'http://localhost:3000/'}>Home</Link>
                        <form class="form-inline my-lg-0">
                        <Link to='/'>
                            <button class="btn btn-danger mx-2" type="submit" onClick={this.logOut}>Log out</button>
                        </Link>
                        </form>
                </nav> 
            </div>
        )
        }
        else{
            return(
                <div>
                <nav class="navbar navbar-dark bg-primary">
                <a href='/'>GARAGE APP</a>
                </nav>
            </div>
            )
        }
    }
}
