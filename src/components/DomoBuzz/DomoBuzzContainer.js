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
        this.state = {show: props.show};
        console.log('test ', props);
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
        console.log('these are my domobuzz props ', this.props);
        console.log('these are my domobuzz state ', this.state);
        let stuff = this.state.show?'domobuzz':'domobuzz hide';
        return (
            <div className={stuff}>
                   <DomoBuzz />
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

export default connect(mapStateToProps, mapDispatchToProps)(DomoBuzzContainer);