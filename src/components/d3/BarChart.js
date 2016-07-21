import React        from 'react';
import * as d3           from 'd3';
import DataCircles  from './data-circles';
import DataBars from './Data-Bars'
import XYAxis       from './x-y-axis';

const xMax   = (data)  => d3.max(data, (d) => d.favorite_count);
const yMax   = (data)  => d3.max(data, (d) => d.favorite_count);

var parseDate = d3.timeFormat("%Y-%m-%d %H:%M:%S");

// const xScale = (props) => {
//     //console.log(props.data)
//     var minDate = props.data[0].created_at;
//     var maxDate = props.data[props.data.length -1].created_at;
//     console.log('min and max dates ', minDate);
//     console.log(parseDate(Date.parse(minDate)));
//     return d3.scaleTime()
//         .domain([Date.parse(minDate), Date.parse(maxDate)])
//         .range([props.padding, props.width - props.padding]);
// };

const xScale = (props) => {
    return d3.scaleLinear()
        .domain([0, props.data.length])
        .range([props.padding, props.width - props.padding])
}
const yScale = (props) => {
    console.log(props.data);
    return d3.scaleLinear()
        .domain([0, yMax(props.data)])
        .range([props.height - props.padding, 0]);
};
const marshalProps = (props) => {
    const scales = { xScale: xScale(props), yScale: yScale(props) };
    return Object.assign({}, props, scales);
};

export default (props) => {
    const d3Props = marshalProps(props);


    return (
        <svg width={d3Props.width} height={d3Props.height}>
            <DataBars {...d3Props}/>
            <XYAxis {...d3Props}/>
        </svg>
    )
}