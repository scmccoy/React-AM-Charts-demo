import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Radar extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.RadarChart);

    chart.data = [
      {
        country: "Lithuania",
        litres: 501
      },
      {
        country: "Czech Republic",
        litres: 301
      },
      {
        country: "Ireland",
        litres: 266
      },
      {
        country: "Germany",
        litres: 165
      },
      {
        country: "Australia",
        litres: 139
      },
      {
        country: "Austria",
        litres: 336
      },
      {
        country: "UK",
        litres: 290
      },
      {
        country: "Belgium",
        litres: 325
      },
      {
        country: "The Netherlands",
        litres: 40
      }
    ];
    // if external source
    // chart.dataSource.url = "chart_data.json";

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    let series = chart.series.push(new am4charts.RadarSeries());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }} />
      </div>
    );
  }
}

export default Radar;
