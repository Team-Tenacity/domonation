import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../../actions/twitterActions';

import UpperNav from "./UpperNav";
import Subheader from './Subheader';
import DomoBuzz from '../DomoBuzz/DomoBuzzContainer';


class ChartLandingPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            counter: this.props.twitter.counter,
            isUserLoggedIn: this.props.twitter.isUserLoggedIn
        };
        this.getTwitterFeed = this.getTwitterFeed.bind(this);
    }

    componentWillMount() {
        this.props.actions.twitterGet(this.props.twitter.user.twitterHandle);
    }

    getTwitterFeed() {
        console.log(this.props.twitter);
        this.props.actions.twitterGet(this.props.twitter.user.twitterHandle);
    }

    render() {
        console.log('this is my chart landing page props',this.props);
        console.log('this is my chart landing page state',this.state);
        return (
            <div>
                <UpperNav />
                <Subheader />
                <DomoBuzz />
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        twitter: state.twitter,
        isUserLoggedIn: state.isUserLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(twitterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartLandingPage);
