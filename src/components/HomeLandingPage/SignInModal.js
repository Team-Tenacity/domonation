import React from "react";
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

require('./SignInModal.css');

  class SignInModal extends React.Component {
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
          <button onClick={this.openModal}>Sign In Test</button>
              <Modal isOpen={this.state.open} shouldCloseOnOverlayClick={true} className="login-modal">
                <img src="https://support.domo.com/public/images/logo-400.png" height="100" width="100" />
                    <div className="inside-modal-div">
                        <input placeholder="Email Address"></input>
                        <input placeholder="Password" type="password"></input>
                        <button onClick={this.closeModal} className="sign-up-button">Sign In!</button>
                    </div>
              </Modal>
        </div>
      );
    }
  }

  export default SignInModal;
