import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const BoundaryChart = () => {
  //const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    // Create chart instance
    let chart = am4core.create("chartBoundary", am4charts.XYChart);

    // Add data
    chart.data = [{
        "category": "고정연소",
        "positive1": 2400,
        "positive2": 2300,
    }, {
        "category": "이동연소",
        "positive1": 1400,
        "positive2": 1200,
        "positive3": 900,
    }, {
        "category": "공정배출",
        "positive1": 2200,
        "positive2": 2500,
    }, {
        "category": "폐기물소각",
        "positive1": 2200,
    }, {
        "category": "",
    }, {
        "category": "전력 사용시설",
        "negative1": 7600,
    }, {
        "category": "열/스팀 사용시설",
        "negative1": 2800,
    }, {
        "category": "기타 외부시설",
        "green1": 1600,
    }];


    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 0.8;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0;
    categoryAxis.opacity = 0.5;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 10000;
    valueAxis.opacity = 0.5;
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
        return text;
    })

    // Use only absolute numbers
    //chart.numberFormatter.numberFormat = "#.#s";

    // Create series
    function createSeries(field, name, color) {
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "category";
        series.stacked = true;
        series.name = name;
        series.stroke = color;
        series.fill = color;
        series.columns.template.height = am4core.percent(70);

        let label = series.bullets.push(new am4charts.LabelBullet);
        label.label.text = "{valueX}";
        label.label.fill = am4core.color("#fff");
        label.label.strokeWidth = 0;
        label.label.truncate = false;
        label.label.hideOversized = true;
        label.locationX = 0.5;
        return series;
    }

    // let interfaceColors = new am4core.InterfaceColorSet();
    // let positiveColor = interfaceColors.getFor("positive");

    const interfaceColors = new am4core.InterfaceColorSet();

    const pColor = am4core.color('#0068E6');
    const nColor = am4core.color('#46C2AD');
    const gColor = am4core.color('#A8DB42');
    interfaceColors.setFor('positive', pColor);
    interfaceColors.setFor('negative', nColor);
    interfaceColors.setFor('green', gColor);

    const positiveColor = interfaceColors.getFor("positive");
    const negativeColor = interfaceColors.getFor("negative");
    const greenColor = interfaceColors.getFor("green");

    createSeries("positive1", "Sometimes", positiveColor);
    createSeries("positive2", "Very often", positiveColor.lighten(0.3));
    createSeries("positive3", "Very often", positiveColor.lighten(0.5));
    createSeries("negative1", "Never", negativeColor);
    createSeries("negative2", "Unlikely", negativeColor.lighten(0.2));
    createSeries("green1", "Never", greenColor);
    
    // @ts-ignore
    //chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
      <div id={'chartBoundary'} style={{ width: "100%", height: "107%", fontSize: "0.75rem", paddingRight: "0.5rem", letterSpacing:"-0.5px"}}/>
  );
}

export default BoundaryChart;

