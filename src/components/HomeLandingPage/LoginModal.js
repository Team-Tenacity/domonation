import React from "react";
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../../actions/twitterActions';

require('./LoginModal.css');

  class LoginModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        open: false,
        name:  {
          firstName: '',
          lastName: '',
        },
        email: '',
        password: '',
        twitterHandle: ''
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.signUp = this.signUp.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log('updated state');
        const field = event.target.name;
        let property = this.state;
        property[field] = event.target.value;
        return this.setState({property: property})
    }

    openModal () { this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    signUp (e) {
      e.preventDefault();
        let user = {
            name: {
              firstName: this.state.firstName,
              lastName: this.state.lastName
            },
            email: this.state.email,
            password: this.state.password,
            twitterHandle: this.state.twitterHandle
      }
        this.props.actions.registerUser(user);
        this.closeModal();
        alert('Registration Successful! Please Login.')
    }

    render () {
      return (
        <div>
          <button onClick={this.openModal} className="sign-up-nav-button">Sign Up</button>
              <Modal isOpen={this.state.open} onRequestClose={this.closeModal} className="login-modal">
                <img src="https://support.domo.com/public/images/logo-400.png" height="100" width="100" />
                    <div className="inside-modal-div">
                      <form>
                        <input className="modal-div-inputs" onChange={this.onChange} name="firstName" value={this.state.firstName} placeholder="First Name"></input>
                        <input className="modal-div-inputs" onChange={this.onChange} name="lastName" value={this.state.lastName} placeholder="Last Name"></input>
                        <input className="modal-div-inputs" onChange={this.onChange} name="email" value={this.state.email} placeholder="Email Address"></input>
                        <input className="modal-div-inputs" onChange={this.onChange} name="password" value={this.state.password} placeholder="Password" type="password"></input>
                        <input className="modal-div-inputs" onChange={this.onChange} name="twitterHandle" value={this.state.twitterHandle}  placeholder="Twitter Handle"></input>
                        <button onClick={this.signUp} type="submit" className="sign-up-button">CONTINUE</button>
                      </form>
                    </div>
              </Modal>
        </div>
      );
    }
  }

  function mapStateToProps(state, ownProps) {

      return {

      };
  }

  function mapDispatchToProps(dispatch) {
      return {
          actions: bindActionCreators(twitterActions, dispatch)
      };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
