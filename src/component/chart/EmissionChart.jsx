import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const EmissionChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("emissChart", am4charts.XYChart);
    chart.padding(20, 20, 10, 10);

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = false;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.opacity = 0.5;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 1500;
    valueAxis.opacity = 0.5;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "category";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    series.columns.template.height = am4core.percent(60);
    series.columns.template.propertyFields.fill = "color";

    let labelBullet = series.bullets.push(new am4charts.LabelBullet())
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.dx = 10;
    labelBullet.label.text = "{values.valueX.workingValue}";
    labelBullet.locationX = 1;
    labelBullet.label.fill = am4core.color("#fff");


    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    // series.columns.template.adapter.add("fill", function (fill, target) {
    //    return chart.colors.getIndex(target.dataItem.index);
    // });

    categoryAxis.sortBySeries = series;
    chart.data = [
        {
          "category": "항목1",
          "MAU": 600,
          "color": am4core.color("#A8DB42")
        },
        {
          "category": "항목2",
          "MAU": 1400,
          "color": am4core.color("#46C2AD")
        },
        {
          "category": "항목3",
          "MAU": 1200,
          "color": am4core.color("#00B8E6")
        },
        {
          "category": "항목4",
          "MAU": 700,
          "color": am4core.color("#1799E5")
        },
        {
          "category": "항목5",
          "MAU": 1700,
          "color": am4core.color("#0068E6")
        },
    ]

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'emissChart'} style={{ width: "100%", height: "108%", fontSize:"0.75rem"}}/>
  );
}

export default EmissionChart;

