import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const SalseChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartSale1", am4charts.XYChart);

    chart.exporting.menu = new am4core.ExportMenu();

    let data = [ {
        "month": "1월",
        "income": 40000,
        "expenses": 37000,
        }, {
        "month": "2월",
        "income": 50000,
        "expenses": 58000,
        }, {
        "month": "3월",
        "income": 60000,
        "expenses": 66000,
        }, {
        "month": "4월",
        "income": 52000,
        "expenses":61000
        }, {
        "month": "5월",
        "income": 30000,
        "expenses": 52000,
        },{
        "month": "6월",
        "income": 40000,
        "expenses": 60000,
        }, {
        "month": "7월",
        "income": 55000,
        "expenses": 56000
        }, {
        "month": "8월",
        "income": 45000,
        "expenses": 50000
        }, {
        "month": "9월",
        "income": 30000,
        "expenses": 38000
        }, {
        "month": "10월",
        "income": 34000,
        "expenses": 45000
        }, {
        "month": "11월",
        "income": 53000,
        "expenses": 43000
        }, {
        "month": "12월",
        "income": 61000,
        "expenses": 60000,
        "strokeWidth": 1,
        "columnDash": "5,5",
        "fillOpacity": 0.2,
        "additional": "(projection)"
    } ];

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.opacity = 0.5;

    /* Create value axis */
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minGridDistance = 20;
    valueAxis.min = 0;
    valueAxis.max = 70000;
    valueAxis.opacity = 0.5;

    /* Create series */
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "배출량";
    columnSeries.dataFields.valueY = "income";
    columnSeries.dataFields.categoryX = "month";

    columnSeries.columns.template.tooltipText = "[#fff font-size: 14px]{name} {categoryX}:\n[/][#fff font-size: 14px]{valueY}[/] [#fff]{additional}[/]"
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.tooltip.label.textAlign = "middle";
    columnSeries.columns.template.column.cornerRadiusTopLeft = 5;
    columnSeries.columns.template.column.cornerRadiusTopRight = 5;

    columnSeries.columns.template.fill = am4core.color("#46C2AD");
    columnSeries.columns.template.width = am4core.percent(60);
    

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Expenses";
    lineSeries.dataFields.valueY = "expenses";
    lineSeries.dataFields.categoryX = "month";

    lineSeries.stroke = am4core.color("#0068E6");
    lineSeries.strokeWidth = 2;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";

    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#0068E6"); // tooltips grab fill from parent by default
    bullet.tooltipText = "[#fff font-size: 14px]{name} in {categoryX}:\n[/][#fff font-size: 16px]{valueY}[/] [#fff]{additional}[/]"
    let circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;

    chart.data = data;

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'chartSale1'} style={{ width: "100%", height: "108%", fontSize:"0.75rem"}}/>
  );
}

export default SalseChart1;

