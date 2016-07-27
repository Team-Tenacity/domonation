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
            counter: this.props.twitter.counter
        };
        this.getTwitterFeed = this.getTwitterFeed.bind(this);
    }

    componentWillMount() {
        this.props.actions.twitterGet();
    }

    getTwitterFeed() {
        this.props.actions.twitterGet();
    }

    render() {
        console.log(this.props);
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
        twitter: state.twitter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(twitterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartLandingPage);
