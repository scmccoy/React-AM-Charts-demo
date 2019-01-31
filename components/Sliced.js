import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class Sliced extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.SlicedChart);

    chart.data = [
      {
        name: "Stage #1",
        value: 600
      },
      {
        name: "Stage #2",
        value: 300
      },
      {
        name: "Stage #3",
        value: 200
      },
      {
        name: "Stage #4",
        value: 180
      },
      {
        name: "Stage #5",
        value: 50
      },
      {
        name: "Stage #6",
        value: 20
      },
      {
        name: "Stage #7",
        value: 10
      }
    ];

    // if data external
    //   chart.dataSource.url = "funnel_chart_data.json";
    let series = chart.series.push(new am4charts.FunnelSeries());

    series.dataFields.value = "value";
    series.dataFields.category = "name";

    series.alignLabels = true;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
      </div>
    );
  }
}

export default Sliced;
