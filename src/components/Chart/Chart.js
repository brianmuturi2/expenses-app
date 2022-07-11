import ChartBar from './ChartBar';

function Chart(props) {
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}/>
            ))}
        </div>
    );
}

export default Chart;
