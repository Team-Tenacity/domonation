import React from "react";
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

require('./LoginModal.css');

  class LoginModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {open: false};
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal () { this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    render () {
      return (
        <div>
          <button onClick={this.openModal} className="sign-up-nav-button">Sign Up</button>
              <Modal isOpen={this.state.open} onRequestClose={this.closeModal} className="login-modal">
                <img src="https://support.domo.com/public/images/logo-400.png" height="100" width="100" />
                    <div className="inside-modal-div">
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                        <input placeholder="Email Address"></input>
                        <input placeholder="Password" type="password"></input>
                        <input placeholder="Twitter Handle"></input>
                        <button onClick={this.closeModal} className="sign-up-button">CONTINUE</button>
                    </div>
              </Modal>
        </div>
      );
    }
  }

  export default LoginModal;
