import React from "react";
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
import {Link} from 'react-router';

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
        <div className="modal-parent-div">
          <button onClick={this.openModal} className="sign-in-nav-button">Sign In</button>
              <Modal isOpen={this.state.open} onRequestClose={this.closeModal} className="signin-modal">
                <img src="https://support.domo.com/public/images/logo-400.png" height="100" width="100" />
                    <div className="inside-modal-div">
                        <input placeholder="Email Address"></input>
                        <input placeholder="Password" type="password"></input>
                        <button className="sign-up-button"><Link to="charts">CONTINUE</Link></button>
                    </div>
              </Modal>
        </div>
      );
    }
  }

  export default SignInModal;
