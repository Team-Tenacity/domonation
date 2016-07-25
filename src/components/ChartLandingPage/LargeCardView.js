import React from "react";
import {Link} from 'react-router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../../actions/twitterActions';
import Chart from '../d3/Chart';

import * as _ from 'underscore';

require("./LargeCardView.css");

class LargeCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:{}}
        this.getTwitterFeed = this.getTwitterFeed.bind(this);
    }
    componentWillMount() {
        this.props.actions.twitterGet();
    }

    getTwitterFeed() {
        this.props.actions.twitterGet();
    }

    render() {
        return (
            <div className="large-card-div">
                <div className="path-header">
                    <h1 className="path-h1"><Link to="charts">TWITTER</Link>></h1>
                    <h2 className="path-h2">LIKES PER TWEET</h2>
                </div>
                <div className="description-header">
                    <h2 className="title-h2">LIKES PER TWEET</h2>
                    <div className="description-glyphicon">
                        <span className="glyphicon glyphicon-filter"></span>
                    </div>
                    <div className="description-glyphicon">
                        <span className="glyphicon glyphicon-bell"></span>
                    </div>
                    <div className="description-glyphicon">
                        <span className="glyphicon glyphicon-star"></span>
                    </div>
                    <div className="description-glyphicon">
                        <span className="glyphicon glyphicon-resize-full"></span>
                    </div>
                </div>
                <div className="large-graph-div">
                    <div className="left-pointer-div">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </div>
                    <Chart data={_.map(this.props.twitter.twitterData,function(tweet, index){return{series1:tweet.favorite_count}})} height="300" width="500" padding="30"/>
                    <div className="right-pointer-div">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LargeCard);

