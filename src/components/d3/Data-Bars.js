import React from 'react';
import * as d3 from 'd3';

const renderRects = (props) => {
    var parseDate = d3.timeFormat("%Y-%m-%d %H:%M:%S");
    console.log('data bars props', props);
    return (data, index) => {
        const rectProps = {
            //x: props.xScale(Date.parse(data.created_at)),
            x: props.xScale(index) + props.padding/4,
            y: props.height - props.padding - props.yBarScale(data.favorite_count),
            width: props.width / (props.data.length * 2),
            height: props.yBarScale(data.favorite_count),
            fill: "#99CCEE",
            key: index
        };
        return <rect {...rectProps} />;
    };
};

export default (props) => {
    return <g>{ props.data.map(renderRects(props)) }</g>
}