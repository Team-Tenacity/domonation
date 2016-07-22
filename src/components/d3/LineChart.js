import React        from 'react';
import * as d3           from 'd3';
import DataLine from './Data-Line';
import XYAxis       from './x-y-axis';

const xMax   = (data)  => d3.max(data, (d) => d.favorite_count);
const yMax   = (data)  => d3.max(data, (d) => d.favorite_count);

var parseDate = d3.timeFormat("%Y-%m-%d %H:%M:%S");

const xScale = (props) => {
    //console.log(props.data)
    var minDate = props.data[0].created_at;
    var maxDate = props.data[props.data.length -1].created_at;
    console.log('min and max dates ', minDate);
    console.log(parseDate(Date.parse(minDate)));
    return d3.scaleTime()
        .domain([Date.parse(minDate), Date.parse(maxDate)])
        .range([props.padding, props.width - props.padding]);
};
const yScale = (props) => {
    console.log(props.data);
    return d3.scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding * 2, props.padding]);
};

var x = (props) => {
    d3.scaleTime()
        .domain(d3.extent(props.data, function (d) {
            return d.date;
        }))
        .rangeRound([0, props.width]);
}
var y = (props) => {
    d3.scaleLinear()
        .domain([0, d3.max(props.data, function (d) {
            return d.count + 100;
        })])
        .range([props.height, 0]);
}
const line =  d3.line()
        .x((d,i) => {return x(Date.parse(d.created_at))})
        .y((d, i) => {return y(d.favorite_count)})

const marshalProps = (props) => {
    const scales = { xScale: xScale(props), yScale: yScale(props), line: line(props)};
    return Object.assign({}, props, scales);
};

export default (props) => {
    const d3Props = marshalProps(props);


    return (
        <svg width={d3Props.width} height={d3Props.height}>
            <path d={line(props.data)} className="line" />
            <XYAxis {...d3Props}/>
        </svg>
    )
}