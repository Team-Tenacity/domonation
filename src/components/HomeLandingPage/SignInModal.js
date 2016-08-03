import React, {PropTypes} from "react";
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../../actions/twitterActions';


require('./SignInModal.css');

  class SignInModal extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          open: false,
          email: '',
          password: ''
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.signIn = this.signIn.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        let property = this.state;
        property[field] = event.target.value;
        return this.setState({property: property})
    }

    openModal () { this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    signIn (e) {
      e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.actions.userLogin(user);
        window.setTimeout(() => {
                if (this.props.twitter.isUserLoggedIn === true) {
                    this.context.router.push('charts')
                } else{
                    alert('Username or password was incorrect, please try again.')
                }
        }
                ,
                1000

        )
    }

    render () {
      return (
        <div className="modal-parent-div">
          <button onClick={this.openModal} className="sign-in-nav-button">Sign In</button>
              <Modal isOpen={this.state.open} onRequestClose={this.closeModal} className="signin-modal">
                <img src="https://support.domo.com/public/images/logo-400.png" height="100" width="100" />
                    <div className="inside-modal-div">
                      <form>
                        <input onChange={this.onChange}  name="email" value={this.state.email} placeholder="Email Address"></input>
                        <input onChange={this.onChange} name="password" value={this.state.password} placeholder="Password" type="password"></input>
                        <button onClick={this.signIn} type="submit" className="sign-up-button">CONTINUE</button>
                      </form>
                    </div>
              </Modal>
        </div>
      );
    }
  }

function mapStateToProps(state, ownProps) {

    return {
        twitter: state.twitter

    };
}

SignInModal.contextTypes = {
    router: PropTypes.object
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(twitterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);
