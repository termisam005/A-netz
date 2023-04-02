import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const SalseChart4 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartSale4", am4charts.XYChart);

    chart.exporting.menu = new am4core.ExportMenu();

    let data = [ {
        "month": "2020",
        "income": 75,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2021",
        "income": 74,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2022",
        "income": 73,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2023",
        "income": 72,
        "expenses":70,
        "midd":52,
        "target":35
        }, {
        "month": "2024",
        "income": 70,
        "expenses": 70,
        "midd":52,
        "target":35
        },{
        "month": "2025",
        "income": 68,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2026",
        "income": 67,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2027",
        "income": 65,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2028",
        "income": 64,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2029",
        "income": 62,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2030",
        "income": 60,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2031",
        "income": 58,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2032",
        "income": 56,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2033",
        "income": 55,
        "expenses":70,
        "midd":52,
        "target":35
        }, {
        "month": "2034",
        "income": 52,
        "expenses": 70,
        "midd":52,
        "target":35
        },{
        "month": "2035",
        "income": 50,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2036",
        "income": 47,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2037",
        "income": 45,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2038",
        "income": 43,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2039",
        "income": 42,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2040",
        "income": 40,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2041",
        "income": 40,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2042",
        "income": 38,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2043",
        "income": 36,
        "expenses":70,
        "midd":52,
        "target":35
        }, {
        "month": "2044",
        "income": 35,
        "expenses": 70,
        "midd":52,
        "target":35
        },{
        "month": "2045",
        "income": 32,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2046",
        "income": 31,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2047",
        "income": 30,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2048",
        "income": 29,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2049",
        "income": 25,
        "expenses": 70,
        "midd":52,
        "target":35
        }, {
        "month": "2050",
        "income": 22,
        "expenses": 70,
        "midd":52,
        "target":35
        }];

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.opacity = 0.5;

    /* Create value axis */
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minGridDistance = 20;
    valueAxis.min = 0;
    valueAxis.max = 100;
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
    columnSeries.columns.template.width = am4core.percent(50);

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "기준년도";
    lineSeries.dataFields.valueY = "expenses";
    lineSeries.dataFields.categoryX = "month";
    lineSeries.stroke = am4core.color("#002252");
    lineSeries.strokeWidth = 1;
    lineSeries.strokeDasharray = "4,4"
    lineSeries.tooltip.label.textAlign = "middle";

    let lineSeries1 = chart.series.push(new am4charts.LineSeries());
    lineSeries1.name = "중간목표";
    lineSeries1.dataFields.valueY = "midd";
    lineSeries1.dataFields.categoryX = "month";
    lineSeries1.stroke = am4core.color("#00B8E6");
    lineSeries1.strokeWidth = 1;
    lineSeries1.strokeDasharray = "4,4"
    lineSeries1.tooltip.label.textAlign = "middle";

    let lineSeries2 = chart.series.push(new am4charts.LineSeries());
    lineSeries2.name = "목표연도";
    lineSeries2.dataFields.valueY = "target";
    lineSeries2.dataFields.categoryX = "month";
    lineSeries2.stroke = am4core.color("#0068E6");
    lineSeries2.strokeWidth = 1;
    lineSeries2.strokeDasharray = "4,4"
    lineSeries2.tooltip.label.textAlign = "middle";

    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#0068E6");
    bullet.tooltipText = "[#fff font-size: 12px]{name} in {categoryX}:\n[/][#fff font-size: 16px]{valueY}[/] [#fff]{additional}[/]"
    //let circle = bullet.createChild(am4core.Circle);
    //circle.radius = 4;
    //circle.fill = am4core.color("#fff");
    //circle.strokeWidth = 2;

    chart.data = data;

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'chartSale4'} style={{ width: "100%", height: "100%", fontSize:"0.75rem"}}/>
  );
}

export default SalseChart4;

