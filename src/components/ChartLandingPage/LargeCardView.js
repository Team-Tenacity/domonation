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
        let minDate = new Date(this.props.twitter[0].date);
        let maxDate = new Date(this.props.twitter[this.props.twitter.length-1].date);
        this.state = {
                        data:{},
                        minDateString: (minDate.getMonth()+1)+'/'+minDate.getDate()+'/'+minDate.getFullYear(),
                        maxDateString: (maxDate.getMonth()+1)+'/'+maxDate.getDate()+'/'+maxDate.getFullYear()
                    };


        this.findBestTweet = this.findBestTweet.bind(this);
        //this.getTwitterFeed = this.getTwitterFeed.bind(this);
    }
    // componentWillMount() {
    //     this.props.actions.twitterGet();
    // }
    //
    // getTwitterFeed() {
    //     this.props.actions.twitterGet();
    // }

    findBestTweet() {
        let bestTweet;
        let high=0;
        let arr = this.props.twitter;
        for(let i=0; i<this.props.twitter.length; i++){
            if(arr[i].series1 >= high){
                high = arr[i].series1;
                bestTweet=arr[i];
            };
        }
        return <div className="insights-div">
            <h2 className="stats-header">TOP TWEET FOR THIS CARD:</h2>
            <h3><span className="stat-title">Date:</span> {bestTweet.date}</h3>
            <h3><span className="stat-title">Tweet:</span> {bestTweet.title}</h3>
            <h3><span className="stat-title">Favorite Count:</span> {bestTweet.favorite_count}</h3>
            <h3><span className="stat-title">Retweet Count:</span> {bestTweet.retweet_count}</h3>
        </div>;
    }


    render() {
        console.log(this.props.twitter);

        return (
            <div className="large-card-div">
                <div className="path-header">
                    <h1 className="path-h1"><Link to="charts">TWITTER</Link>></h1>
                    <h2 className="path-h2">{this.props.twitter[0].card_name}</h2>
                </div>
                <div className="description-header">
                    <h2 className="title-h2">{this.props.twitter[0].card_name}</h2>
                    <div className="glyphicon-container-div">
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
                </div>
                <div className="large-graph-div">
                    <div className="left-pointer-div">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                    </div>
                    <p>The data on this chart ranges from {this.state.minDateString} to {this.state.maxDateString}</p>
                    <Chart data={this.props.twitter} height="300" width="500" padding="30"/>
                    {this.findBestTweet()}

                    <div className="right-pointer-div">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const datasetId = ownProps.params.id; //from the path
    console.log('the dataset id is ', datasetId);

    return {
        twitter: state.twitter.twitterData[datasetId]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(twitterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LargeCard);
