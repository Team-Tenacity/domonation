import React       from 'react';
import ScatterPlot from './ScatterPlot';
import BarChart from './BarChart';
import LineChart from './LineChart';
import LineChartTest from './LineChartTest';

// const styles = {
//     width   : 200,
//     height  : 150,
//     padding : 25,
// };



export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            width   : props.width,
            height  : props.height,
            padding : props.padding,
            data: [{
            created_at: "Tue Jul 19 15:53:00 +0000 2016",
            favorite_count: 5}] };
    }

    componentWillReceiveProps(nextProps) {
        console.log('received props!');
        this.setState({ data: nextProps.data})
    }


    render() {
        console.log('this is chart props ', this.props );
        return (
        <div>
            <BarChart {...this.state}  />
            <LineChartTest/>
        </div>
        )
    }
}