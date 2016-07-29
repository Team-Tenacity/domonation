import React from 'react'
import DomoBuzz from './DomoBuzz';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../../actions/twitterActions';

require('./DomoBuzz.css');

class DomoBuzzContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: props.show,
            messages: props.messages,
            user: props.user,
            message: ''
        };
        //console.log('test ', props);
        this.toggleDomoBuzz = this.toggleDomoBuzz.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getMessages = this.getMessages.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        //console.log('received props!');
        this.setState(
            {
                show: nextProps.show,
                messages: nextProps.messages
            })
    }

    // componentWillMount(){
    //     this.props.actions.getMessages();
    // }

    toggleDomoBuzz() {
        let curStatus = !this.props.show;
        console.log(curStatus);
        this.props.actions.toggleDomoBuzz(curStatus)
    }

    addMessage(e) {

        if(e.keyCode == 13) {
            if(!this.props.user.userId){
                return alert("Please login before trying to send a message");
            }
            let newMessage = {
                user_image: 'https://www.b1g1.com/assets/admin/images/no_image_user.png',
                user_name: this.props.user.name,
                user: this.props.user.userId,
                content: this.state.message
            }
            this.setState({message:''});
            this.props.actions.addMessage(newMessage);
        }
    }

    getMessages() {
        this.props.actions.getMessages();
    }

    onChange(event) {
        console.log('updated state');
        const field = event.target.name;
        let property = this.state;
        property[field] = event.target.value;
        return this.setState({property: property})
    }



    render() {
        //console.log('these are my domobuzz props ', this.props);
        //console.log('these are my domobuzz state ', this.state);
        let stuff = this.state.show?'domobuzz':'domobuzz hide';
        return (
            <div className={stuff}>
                   <DomoBuzz
                       messages={this.state.messages}
                        onAddMessage = {this.addMessage}
                        onChange = {this.onChange}
                        message = {this.state.message}/>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {

    return {
        twitter: state.twitter.twitterData,
        show: state.twitter.showDomoBuzz,
        messages: state.twitter.domoBuzzMessages,
        user: state.twitter.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(twitterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DomoBuzzContainer);
