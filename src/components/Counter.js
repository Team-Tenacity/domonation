/**
 * Created by cjpowers on 7/14/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../actions/twitterActions';
import {browserHistory} from 'react-router';


class Counter extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            counter: this.props.counter
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.getTwitterFeed = this.getTwitterFeed.bind(this);
    }

    increment(event) {
        let count = ++this.state.counter;
        this.props.actions.increment(count);
        console.log(this.state.counter);
    }
    decrement(event) {
        let count = --this.state.counter;
        this.props.actions.decrement(count);
        console.log(this.state.counter);
    }
    getTwitterFeed() {
        this.props.actions.twitterGet();
    }
    render(){
        console.log(this.state.counter);
        console.log('this is my counter props', this.props);
        return (
            <div>
                {this.state.counter}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.getTwitterFeed}>Get Twitter Feed</button>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(twitterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);