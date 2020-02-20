import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4charts from "@amcharts/amcharts4/charts";

export default function CylinderTotal() {

  setTimeout(() => {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);
    chart.titles.create().text = "ご利用可能枠";

    chart.data = [{
      "category": "総枠",
      "value1": 130000,
      "value2": 900000
    }, {
      "category": "ショッピング１回払い",
      "value1": 60000,
      "value2": 940000
    }, {
      "category": "分割払い",
      "value1": 30000,
      "value2": 270000
    }, {
      "category": "キャッシング",
      "value1": 40000,
      "value2": 260000
    }];
   
    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = -10000;
    valueAxis.max = 1100000;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.baseGrid.disabled = true;
    /*
    valueAxis.renderer.labels.template.adapter.add("text",function(text) {
      if ((text > 100) || (text < 0)) {
        return "";
      }
      else {
        return text + "%";
      }
    })
    */
    // Create series
    let series1 = chart.series.push(new am4charts.ConeSeries());
    series1.dataFields.valueY = "value1";
    series1.dataFields.categoryX = "category";
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.fillOpacity = 0.9;
    series1.columns.template.strokeOpacity = 1;
    series1.columns.template.strokeWidth = 2;

    let series2 = chart.series.push(new am4charts.ConeSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.categoryX = "category";
    series2.stacked = true;
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.fill = am4core.color("#000");
    series2.columns.template.fillOpacity = 0.1;
    series2.columns.template.stroke = am4core.color("#000");
    series2.columns.template.strokeOpacity = 0.2;
    series2.columns.template.strokeWidth = 2;

  
  }, 30);
  return (
      <div className="App">
        <div id="chartdiv"　 style={{ width: "800px", height: "600px", }}>
        </div>
      </div>
  );
}