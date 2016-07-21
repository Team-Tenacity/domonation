import React from 'react';
import * as d3 from 'd3';

// const renderLine = (props) => {
//     var parseDate = d3.timeFormat("%Y-%m-%d %H:%M:%S");
//     console.log('data bars props', props);
//     return (data, index) => {
//         const lineProps = {
//             x: props.xScale(Date.parse(data.created_at)),
//             y: props.height - props.padding - props.yScale(data.favorite_count),
//             key: index
//         };
//         return (<line {...lineProps} />);
//     };
// };

// export default (props) => {
//         const pathProps = {
//             className: 'line',
//             d: props.line,
//         };
//         return (<path {...pathProps} />);
// };

export default (props) => {
   return d3.select('svg')
    .append("path")
        .datum(props.data)
        .attr("class", "line")
        .attr("d", props.line);
}

// export default (props) => {
//     return <g>{ props.data.map(renderPath(props)) }</g>
// }