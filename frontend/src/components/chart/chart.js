import React, { Component } from "react";
import { CanvasJSChart } from 'canvasjs-react-charts';

import chart from "../../assets/data.json";
import logo from '../../logo.png';

let chartData = [];

chart.data.plot_x.forEach((point, index, arr) => {
  chartData.push({
    x: chart.data.plot_x[index],
    y: chart.data.plot_y[index],
    color: '#c3eb34',
  })
})

class Chart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const options = {
      animationEnabled: true,
      zoomEnabled: true,
      width: 600,
      height: 600,
      title: {
        text: "wall thickness plot"
      },
      axisX: {
        title: "Position",
        minimum: 0,
        maximum: 70
      },
      axisY: {
        title: "Elevation",
        minimum: 0,
        maximum: 70
      },
      data: [{
        type: "scatter",
        toolTipContent: "<b>X: </b>{x}<br/><b>Y: </b>{y}",
        dataPoints: chartData
      }]
    }
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Python React Portal</h1>
        </header>
        <div>
          <h2>Chart</h2>
        </div>
        <CanvasJSChart options={options}
        />
      </div>
    );
  }
}

export default Chart;                            