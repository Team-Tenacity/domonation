import React from 'react';

const renderRects = (props) => {
    console.log('data bars props', props);
    return (data, index) => {
        const rectProps = {
            x: props.xScale(index),
            y: props.height - props.padding - props.yScale(data[1]),
            width: 8,
            height: props.yScale(data[1]),
            key: index
        };
        return <rect {...rectProps} />;
    };
};

export default (props) => {
    return <g>{ props.data.map(renderRects(props)) }</g>
}