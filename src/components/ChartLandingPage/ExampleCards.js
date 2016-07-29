import React from "react";
import {Link} from "react-router";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as twitterActions from '../../actions/twitterActions';
import Chart from '../d3/Chart';

import * as _ from 'underscore';

import TitleDiv from './exampleCardTitleDiv/titleDiv';

require("./ExampleCards.css");

class ExampleCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {twitter:[
            [
                {
                    card_name: 'Loading'
                }
            ],
            [
                {
                    card_name: 'Loading'
                }
            ]
        ]}
        // this.getTwitterFeed = this.getTwitterFeed.bind(this);
    }
    componentWillMount() {
        this.props.actions.twitterGet(this.props.user.twitterHandle);
    }

    componentWillReceiveProps(nextProps) {
        //console.log('received props!');
        this.setState({ twitter: nextProps.twitter})
    }

    getTwitterFeed() {
        this.props.actions.twitterGet();
    }
    render() {
        console.log(this.props);
        // console.log(this.state);
        return (
            <div>
                <TitleDiv />
                <div className="deck-div">
                    <Link to="chartDetail/0" className="large-view-link">
                        <div className="card-div">
                            <div className="gear-menu-div">
                                <span className="glyphicon glyphicon-wrench"></span>
                                <span className="glyphicon glyphicon-chevron-down"></span>
                            </div>
                            <div className="content-div">
                                <div className="header-text">
                                    <h1>{this.state.twitter[0][0].card_name}</h1>
                                </div>

                                <div className="spacer-div"></div>

                                <div className="image-div">
                                    <Chart data={this.state.twitter[0]} height="150" width="200" padding="25"/>
                                </div>
                            </div>

                            <div className="footer-div">
                                <img src="https://support.domo.com/public/images/logo-400.png"/>
                                <div className="small-glyph-div-left">
                                    <span className="glyphicon glyphicon-eye-open"></span>
                                </div>
                                <div className="small-glyph-div-right">
                                    <span className="glyphicon glyphicon-comment"></span>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to="chartDetail/1" className="large-view-link">
                    <div className="card-div">
                        <div className="gear-menu-div">
                            <span className="glyphicon glyphicon-wrench"></span>
                            <span className="glyphicon glyphicon-chevron-down"></span>
                        </div>
                        <div className="content-div">
                            <div className="header-text">
                                <h1>{this.state.twitter[1][0].card_name}</h1>
                            </div>

                            <div className="spacer-div"></div>

                            <div className="image-div">
                                <Chart data={this.state.twitter[1]} height="150" width="200" padding="25"/>
                            </div>
                        </div>

                        <div className="footer-div">
                            <img src="https://support.domo.com/public/images/logo-400.png"/>
                            <div className="small-glyph-div-left">
                                <span className="glyphicon glyphicon-eye-open"></span>
                            </div>
                            <div className="small-glyph-div-right">
                                <span className="glyphicon glyphicon-comment"></span>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <div className="card-div">
                        <div className="gear-menu-div">
                            <span className="glyphicon glyphicon-wrench"></span>
                            <span className="glyphicon glyphicon-chevron-down"></span>
                        </div>
                        <div className="content-div">
                            <div className="header-text">
                                <h1>Running Total Line</h1>
                            </div>

                            <div className="spacer-div"></div>

                            <div className="image-div">
                                <img
                                    src="data:image/png;base64,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"/>
                            </div>
                        </div>

                        <div className="footer-div">
                            <img src="https://support.domo.com/public/images/logo-400.png"/>
                            <div className="small-glyph-div-left">
                                <span className="glyphicon glyphicon-eye-open"></span>
                            </div>
                            <div className="small-glyph-div-right">
                                <span className="glyphicon glyphicon-comment"></span>
                            </div>
                        </div>
                    </div>

                    <div className="card-div">
                        <div className="gear-menu-div">
                            <span className="glyphicon glyphicon-wrench"></span>
                            <span className="glyphicon glyphicon-chevron-down"></span>
                        </div>
                        <div className="content-div">
                            <div className="header-text">
                                <h1>Word Cloud</h1>
                            </div>

                            <div className="spacer-div"></div>

                            <div className="image-div">
                                <img
                                    src="data:image/png;base64,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"/>
                            </div>
                        </div>

                        <div className="footer-div">
                            <img src="https://support.domo.com/public/images/logo-400.png"/>
                            <div className="small-glyph-div-left">
                                <span className="glyphicon glyphicon-eye-open"></span>
                            </div>
                            <div className="small-glyph-div-right">
                                <span className="glyphicon glyphicon-comment"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        twitter: state.twitter.twitterData,
        user: state.twitter.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(twitterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleCard);

