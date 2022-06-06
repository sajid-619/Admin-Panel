import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLarge from "../../components/WidgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import "./Home.css";

const data = [0, 1, 5, 6, 3, 10, 2, 8];

const Home = () => {
  return (
    <div className="home">
      <h1>Home page</h1>
      <FeaturedInfo />
      <Chart title="User Aznalytics" data={data} dataKey="Active Users" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;