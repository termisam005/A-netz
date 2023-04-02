import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const SalseChart3 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartSale3", am4charts.XYChart);

    chart.exporting.menu = new am4core.ExportMenu();

    let data = [ {
        "month": "2015",
        "income": 450000,
        "expenses": 490000,
        }, {
        "month": "2016",
        "income": 300000,
        "expenses": 490000,
        }, {
        "month": "2017",
        "income": 320000,
        "expenses": 490000,
        }, {
        "month": "2018",
        "income": 450000,
        "expenses":490000
        }, {
        "month": "2019",
        "income": 320000,
        "expenses": 490000,
        },{ 
        "month": "2020",
        "income": 450000,
        "expenses": 490000,
        }, {
        "month": "2021",
        "income": 300000,
        "expenses": 490000,
        }, {
        "month": "2022",
        "income": 320000,
        "expenses": 490000,
        }, {
        "month": "2023",
        "income": 450000,
        "expenses":490000
        }, {
        "month": "2024",
        "income": 320000,
        "expenses": 490000,
        },{
        "month": "2025",
        "income": 380000,
        "expenses": 490000,
        }, {
        "month": "2026",
        "income": 320000,
        "expenses": 490000
        }, {
        "month": "2027",
        "income": 300000,
        "expenses": 490000
        }, {
        "month": "2028",
        "income": 320000,
        "expenses": 490000
        }, {
        "month": "2029",
        "income": 450000,
        "expenses": 490000
        }, {
        "month": "2030",
        "income": 340000,
        "expenses": 490000
        }, {
        "month": "2031",
        "income": 300000,
        "expenses": 490000,
        }, {
        "month": "2032",
        "income": 320000,
        "expenses": 490000,
        }, {
        "month": "2033",
        "income": 450000,
        "expenses":490000
        }, {
        "month": "2034",
        "income": 320000,
        "expenses": 490000,
        },{
        "month": "2035",
        "income": 380000,
        "expenses": 490000,
        }, {
        "month": "2036",
        "income": 320000,
        "expenses": 490000
        }, {
        "month": "2037",
        "income": 300000,
        "expenses": 490000
        }, {
        "month": "2038",
        "income": 320000,
        "expenses": 490000
        }, {
        "month": "2039",
        "income": 450000,
        "expenses": 490000
        }, {
        "month": "2040",
        "income": 340000,
        "expenses": 490000
        }, {
        "month": "2041",
        "income": 300000,
        "expenses": 490000,
        }, {
        "month": "2042",
        "income": 320000,
        "expenses": 490000,
        }, {
        "month": "2043",
        "income": 450000,
        "expenses":490000
        }, {
        "month": "2044",
        "income": 320000,
        "expenses": 490000,
        },{
        "month": "2045",
        "income": 380000,
        "expenses": 490000,
        }, {
        "month": "2046",
        "income": 320000,
        "expenses": 490000
        }, {
        "month": "2047",
        "income": 300000,
        "expenses": 490000
        }, {
        "month": "2048",
        "income": 320000,
        "expenses": 490000
        }, {
        "month": "2049",
        "income": 450000,
        "expenses": 490000
        }, {
        "month": "2050",
        "income": 340000,
        "expenses": 490000
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
    valueAxis.max = 600000;
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
    lineSeries.name = "배출량";
    lineSeries.dataFields.valueY = "expenses";
    lineSeries.dataFields.categoryX = "month";

    lineSeries.stroke = am4core.color("#0068E6");
    lineSeries.strokeWidth = 2;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";

    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#0068E6");
    //bullet.tooltipText = "[#fff font-size: 14px]{name} in {categoryX}:\n[/][#fff font-size: 16px]{valueY}[/] [#fff]{additional}[/]"
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
    <div id={'chartSale3'} style={{ width: "180%", height: "100%", fontSize:"0.6rem"}}/>
  );
}

export default SalseChart3;

