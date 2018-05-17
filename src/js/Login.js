import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uName: '',
            uAddress: '',
            uPhone:''

        }
        this.updateName = this.updateName.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updatePhone = this.updatePhone.bind(this);

    };
    updateName(e) {
        this.setState({ uName: e.target.value });
    }

    updateAddress(e) {
        this.setState({ uAddress: e.target.value });
    }
    updatePhone(e) {
        this.setState({ uPhone: e.target.value });
    }

    render() {
        return (
            <div>
                <Content uNameProps={this.state.uName} updateNameProps={this.updateName}
                    uAddressProps={this.state.uAddress} updateAddressProps={this.updateAddress}
                    uPhoneProps={this.state.uPhone} updatePhoneProps={this.updatePhone}></Content>
            </div>
        );
    }
}
class Content extends Component {
    render() {
        return (
            <div>
                <label>Name :</label><input type="text" value={this.props.uNameProps} onChange={this.props.updateNameProps} /> <br />
                <label>Address :</label><input type="text" value={this.props.uAddressProps} onChange={this.props.updateAddressProps} /><br />
                <label>Phone :</label><input type = "text" value = {this.props.uPhoneProps} onChange = {this.props.updatePhoneProps} />

                <h3>Name    :{this.props.uNameProps}</h3>
                <h3>Address :{this.props.uAddressProps}</h3>
                <h3>Phone   :{this.props.uPhoneProps}</h3>

            </div>
        );
    }
}
export default Login;