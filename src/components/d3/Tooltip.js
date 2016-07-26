import React from 'react';
import * as d3    from 'd3';

export default class Axis extends React.Component {
    // componentDidUpdate() {
    //     this.renderAxis();
    // }
    //
    // componentDidMount() {
    //     this.renderAxis();
    // }

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

    renderTip() {
        console.log('these are the refs ', this.refs);
        d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
                return "<stong>Tweet:</stong> <span style='color:red'>" + d.title + "</span>"
            })
    }

    render() {
        return <g className="axis" ref="axis" transform={this.props.translate}></g>
    }
}