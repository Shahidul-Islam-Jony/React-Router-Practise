import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const ReCharts = () => {

    const student_data = [
        { id: 1, name: 'Student 1', physics: 85, math: 92, chemistry: 78 },
        { id: 2, name: 'Student 2', physics: 78, math: 88, chemistry: 90 },
        { id: 3, name: 'Student 3', physics: 92, math: 96, chemistry: 85 },
        { id: 4, name: 'Student 4', physics: 89, math: 85, chemistry: 92 },
        { id: 5, name: 'Student 5', physics: 76, math: 80, chemistry: 78 },
        { id: 6, name: 'Student 6', physics: 94, math: 90, chemistry: 87 },
        { id: 7, name: 'Student 7', physics: 81, math: 85, chemistry: 88 },
        { id: 8, name: 'Student 8', physics: 87, math: 89, chemistry: 91 },
        { id: 9, name: 'Student 9', physics: 90, math: 93, chemistry: 89 },
        { id: 10, name: 'Student 10', physics: 83, math: 86, chemistry: 80 },
    ];


    return (
        <div>
            <LineChart width={1200} height={400} data={student_data}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="math" stroke="green"></Line>
                <Line dataKey="physics" stroke="red"></Line>
                <CartesianGrid  stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                <Line dataKey={"chemistry"} stroke="orange"></Line>
                <Tooltip></Tooltip>
            </LineChart>
            <AreaChart width={1200} height={300} data={student_data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Area type="monotype" dataKey="math" stroke="red"></Area>
            </AreaChart>
        </div>
    );
};

export default ReCharts;