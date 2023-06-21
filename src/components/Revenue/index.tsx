import React from "react";
import NavigationButton from "../NavigationButton";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function Revenue() {
  const bgColor = ["#1ec891", "#ff725e", "#ffd05b", "red", "blue", "grey"];
  const generateColor = () => {
    return bgColor[Math.floor(Math.random() * bgColor.length)];
  };
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Simple Column Chart with Index Labels",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      categories: ["20", "40", "60", "80", "100", "120"],
    },
    credits: { enabled: false },
    yAxis: {
      title: "",
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },

    series: [
      {
        data: [9, 3, 21, 22, 23, 23],

        color: generateColor(),
      },
      {
        data: [9, 20, 21, 13, 15, 14],

        color: generateColor(),
      },
      {
        data: [9, 20, 21, 22, 23, 11],

        color: generateColor(),
      },
    ],
  };
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginTop: "32px", fontSize: "18px", color: "#1e64b6" }}>
        Dashboard
      </div>
      <NavigationButton />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Revenue;
