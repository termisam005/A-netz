import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const RatioChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartRatio1", am4charts.PieChart);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(40);

    // Put a thick white border around each Slice
    pieSeries.slices.template.propertyFields.fill = "color";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 0;
    pieSeries.slices.template.strokeOpacity = 0;
    pieSeries.slices.template
    // change the cursor on hover to make it apparent the object can be interacted with
    .cursorOverStyle = [
      {
        "property": "cursor",
        "value": "pointer"
      }
    ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = false;
    pieSeries.labels.template.radius = 0;
    pieSeries.labels.template.opacity = 0.7;
    pieSeries.labels.template.padding(15, 10, 15, 10);
    pieSeries.ticks.template.disabled = false;

    // Create a base filter effect (as if it's not there) for the hover to return to
    let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    let hoverState = pieSeries.slices.template.states.getKey("hover");

    // Slightly shift the shadow and make it more prominent on hover
    let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    //chart.legend = new am4charts.Legend();

    chart.data = [{
      "country": "연료",
      "litres": 301.9,
      "color": am4core.color("#A8DB42")
    }, {
      "country": "Label",
      "litres": 165.8,
      "color": am4core.color("#74D67F")
    }, {
      "country": "전기",
      "litres": 180.8,
      "color": am4core.color("#46C2AD")
    }, {
      "country": "난방보일러",
      "litres": 120.0,
      "color": am4core.color("#00B8E6")
    }, {
      "country": "스팀",
      "litres": 165.8,
      "color": am4core.color("#1799E5")
    }, {
      "country": "지게차 2",
      "litres": 165.8,
      "color": am4core.color("#0068E6")
    }, {
      "country": "영업승용차 1",
      "litres": 165.8,
      "color": am4core.color("#004F9E")
    }];

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'chartRatio1'} style={{ width: "100%", height: "90%", fontSize:"0.75rem"}}/>
  );
}

export default RatioChart1;

