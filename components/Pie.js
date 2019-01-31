import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styled from "styled-components";

const Divider = styled.div`
  width: 80%;
  border: 2px solid #333;
  margin: 0 auto;
`;

class Pie extends Component {
  componentDidMount() {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    let chartDonut = am4core.create("chartdiv2", am4charts.PieChart);

    // donut!
    chartDonut.innerRadius = am4core.percent(40);
    // Add data
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      },
      {
        country: "Belgium",
        litres: 60
      },
      {
        country: "The Netherlands",
        litres: 50
      }
    ];
    chartDonut.data = [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      },
      {
        country: "Belgium",
        litres: 60
      },
      {
        country: "The Netherlands",
        litres: 50
      }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    // style main piechart
    pieSeries.slices.template.stroke = am4core.color("#4a2abb");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    let pieSeries2 = chartDonut.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "litres";
    pieSeries2.dataFields.category = "country";
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
    if (this.chartDonut) {
      this.chartDonut.dispose();
    }
  }

  render() {
    return (
      <div>
        <div
          id="chartdiv"
          style={{ width: "100%", height: "500px", margin: "25px 0" }}
        />
        <Divider />
        <div
          id="chartdiv2"
          style={{ width: "100%", height: "500px", margin: "25px 0" }}
        />
      </div>
    );
  }
}

export default Pie;
