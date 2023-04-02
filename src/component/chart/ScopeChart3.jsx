import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const ScopeChart3 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("scopeChart3", am4charts.XYChart);
    chart.padding(0, 15, 0, 0);

    // Add data
    chart.data = [{
        "scope": "본관",
        "income": 15,
        "color": am4core.color("#A8DB42"),
    }, {
        "scope": "생산1동",
        "income": 24,
        "color": am4core.color("#A8DB42"),
    }, {
        "scope": "생산2동",
        "income": 17,
        "color": am4core.color("#A8DB42"),
    }, {
        "scope": "저장1동",
        "income": 12,
        "color": am4core.color("#A8DB42"),
    }, {
        "scope": "차량",
        "income": 42,
        "color": am4core.color("#A8DB42"),
    }];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "scope";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.minGridDistance = 0.5;
    categoryAxis.marginLeft = 10;
    categoryAxis.opacity = 0.5;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = false;
    valueAxis.min = 0;
    valueAxis.max = 50;
    valueAxis.opacity = 0.7;
    valueAxis.renderer.grid.template.disabled = false;

    // Create series
    function createSeries(field, name) {
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "scope";
        series.name = name;
        series.columns.template.tooltipText = "{name} [bold]{valueX}[/]";
        series.columns.template.height = am4core.percent(30);
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;
        series.sequencedInterpolation = true;

        // let valueLabel = series.bullets.push(new am4charts.LabelBullet());
        // valueLabel.label.text = "{valueX}";
        // valueLabel.label.horizontalCenter = "left";
        // valueLabel.label.dx = 10;
        // valueLabel.label.hideOversized = false;
        // valueLabel.label.truncate = false;
        // valueLabel.label.fill = am4core.color('#0068E6');

        let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
        categoryLabel.label.text = "{name}";
        categoryLabel.label.horizontalCenter = "right";
        categoryLabel.label.dx = -10;
        categoryLabel.label.fill = am4core.color("#fff");
        categoryLabel.label.hideOversized = false;
        categoryLabel.label.truncate = false;
    }

    createSeries("income");

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'scopeChart3'} style={{ width: "100%", height: "100%", fontSize:"0.75rem"}}/>
  );
}

export default ScopeChart3;

