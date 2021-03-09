import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../service/action/LoginAction'
class Register extends Component {

    constructor(props) {
        super(props);
        // this.props.logout();

        this.state = {
            email: '',
            password: '',
            username: '',
            address: '',
            phoneNumber: '',
            doB: '',
            submitted: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange=(e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit=(e) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { address, phoneNumber, doB, username, email, password } = this.state;
        if (email && password) {
            this.props.register({ address, phoneNumber, doB, username, email, password });
        }
    }
    render() {
        const { registering } = this.props;
        const { address, phoneNumber, doB, username, email, password } = this.state;
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Create Emp</h4>
                                    <p className="card-category">EMP create account</p>
                                </div>
                                <div className="card-body">
                                    <form >
                                        <div className="row">

                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Username</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Email address</label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">password</label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Confirm password</label>
                                                    <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    onChange={this.handleInputChange} 
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            {/* Date begin */}
                                            <div className="col-md-6">
                                                <label className="bmd-label">Date of Birth</label>
                                                <div className="form-group">
                                                    <input
                                                        type="date"
                                                        name="doB"
                                                        className="form-control"
                                                        onChange={this.handleInputChange} 
                                                    // readOnly={typeof this.props.match === 'undefined' ? false : true} 
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Adress</label>
                                                    <input 
                                                    type="text" className="form-control"
                                                     onChange={this.handleInputChange} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Phone Number</label>
                                                    <input 
                                                    type="text" className="form-control"
                                                    onChange={this.handleInputChange} 
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        
                                        <button type="submit" className="btn btn-primary pull-right">Create Emp</button>
                                        <div className="clearfix" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    return { loggingIn: state.authentication };
}

const mapDispatchToProp = dispatch => {
    return {
        login: (username, password) => [
            dispatch(Action.login(username, password))
        ]
    }
}


export default connect(mapState, mapDispatchToProp)(Register);