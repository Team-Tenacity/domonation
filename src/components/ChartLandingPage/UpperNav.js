import React from "react";
import {Link} from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../../actions/twitterActions';

require("./UpperNav.css");

class UpperNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: props.show}
        this.toggleDomoBuzz = this.toggleDomoBuzz.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('received props!');
        this.setState({ show: nextProps.show})
    }

    toggleDomoBuzz() {
        let curStatus = !this.props.show;
        console.log(curStatus);
        this.props.actions.toggleDomoBuzz(curStatus)
    }
    render() {

        console.log('uppernav props ', this.props)
        return (
            <div className="upper-nav-div">
                <div className="left-half">
                    <div className="logo-div">
                        <a href="/">
                            <img src="https://support.domo.com/public/images/logo-400.png" width="120" height="120"/>
                        </a>
                    </div>
                    <i className="plus-icon">+</i>
                    <div className="cobrand-div">
                        <img src="https://devmounta.in/img/logoonly.png" width="60" height="60"/>
                    </div>
                </div>

                <div className="right-half">
                    <div className="glyphicon-div">
                        <span className="glyphicon glyphicon-search"></span>
                    </div>
                    <div onClick={this.toggleDomoBuzz} className="glyphicon-div">
                        <span className="glyphicon glyphicon-comment"></span>
                    </div>
                    <div className="glyphicon-div">
                        <span className="glyphicon glyphicon-th"></span>
                    </div>
                    <div className="glyphicon-div">
                        <span className="glyphicon glyphicon-user"></span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {

    return {
        twitter: state.twitter.twitterData,
        show: state.twitter.showDomoBuzz
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(twitterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpperNav);

