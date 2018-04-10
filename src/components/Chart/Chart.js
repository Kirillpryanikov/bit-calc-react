import React from 'react';
import { connect } from 'react-redux';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const data = [
    {month: 'Jan', tc: 25, sr: 0},
    {month: 'Feb', tc: 27, sr: 0},
    {month: 'Mar', tc: 29, sr: 1},
    {month: 'Apr', tc: 32, sr: 2},
    {month: 'May', tc: 34, sr: 3},
    {month: 'Jun', tc: 38, sr: 4},
    {month: 'Jul', tc: 42, sr: 5},
    {month: 'Aug', tc: 46, sr: 6},
    {month: 'Sep', tc: 50, sr: 7},
    {month: 'Oct', tc: 57, sr: 8},
    {month: 'Nov', tc: 65, sr: 9},
    {month: 'Dec', tc: 75, sr: 11}
];

class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        return (
            <ResponsiveContainer>
                <AreaChart data={data}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorTC" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFEB3B" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#FFEB3B" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorSR" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#64FFDA" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#64FFDA" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis tickLine={false} axisLine={false} dataKey="month" />
                    <YAxis tickLine={false} axisLine={false}/>
                    <CartesianGrid  vertical={false} strokeDasharray="1 5" />
                    <Area type="monotone" dataKey="tc" stroke="#FFEB3B" strokeWidth={3} fillOpacity={.3} fill="url(#colorTC)" />
                    <Area type="monotone" dataKey="sr" stroke="#64FFDA" strokeWidth={3} fillOpacity={.3} fill="url(#colorSR)" />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}

const mapStateToProps = state => ({
    graph: state.calcData.graph
});

export default connect(mapStateToProps)(Chart);