import React from "react";
import NavigationButton from "../NavigationButton";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function Subcription() {
  const options = {
    title: {
      align: "left",
      text: "Average High & Low Temperature",
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    credits: { enabled: false },
    yAxis: {
      title: {
        text: "Temperature",
      },
    },
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33],
      },
      { name: "Low - 2013", data: [12, 11, 14, 18, 17, 13, 13] },
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

export default Subcription;
