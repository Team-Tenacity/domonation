import React from 'react';
import * as d3    from 'd3';

export default class Axis extends React.Component {
    componentDidUpdate() {
        this.renderAxis();
    }

    componentDidMount() {
        this.renderAxis();
    }

    renderAxis() {
        var node  = this.refs.axis;
        console.log('these are the refs ', this.refs);
        if(this.props.orient === 'left'){
            d3.select(node).call(d3.axisLeft(this.props.scale))
        }
        else if(this.props.orient === 'bottom'){
            d3.select(node).call(d3.axisBottom(this.props.scale))
        }
    }

    render() {
        return <g className="axis" ref="axis" transform={this.props.translate}></g>
    }
}