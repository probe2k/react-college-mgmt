import React, { Component } from 'react';

class UserRegister extends Component {
    render() {
        return (
            <div className="base-container">
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src="../assets/login.png" alt="ui-element"/>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-Mail</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Login</button>
                </div>
            </div>
        );
    }
}

export default UserRegister;