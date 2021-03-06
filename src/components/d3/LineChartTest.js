"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
import {Chart} from 'react-d3-core';
import {LineChart} from 'react-d3-basic';

const LineChartTest = () => {
    // load your general data
    var chartData = [{
        created_at: "Tue Jul 19 15:53:00 +0000 2016",
        favorite_count: 5},
        {
            created_at: "Tue Jul 19 15:53:00 +0000 2016",
            favorite_count: 10}]

    var width = 700,
        height = 300,
        margins = {left: 100, right: 100, top: 50, bottom: 50},
        title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
        chartSeries = [
            {
                field: 'favorite_count',
                name: 'BMI',
                color: '#ff7f0e'
            }
        ],
    // your x accessor
        x = function(d) {
            return d.index;
        }

    return(
        <Chart
            title={title}
            width={width}
            height={height}
            margins= {margins}
        >
            <LineChart
                showXGrid= {false}
                showYGrid= {false}
                margins= {margins}
                title={title}
                data={chartData}
                width={width}
                height={height}
                chartSeries={chartSeries}
                x={x}
            />
        </Chart>
    )
}

export default LineChartTest;