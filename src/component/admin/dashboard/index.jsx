import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../style/admin/Dashboard.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import TitleContent from "../../../common/admin/Title";
import Input from "../../../common/admin/input";
import Button from "../../../common/admin/button";
import { BiSearch, BiCar } from "react-icons/bi";
import DashboardCard from "../DashboarchCard";
import DatePicker from "react-datepicker";
Dashboard.propTypes = {};

function Dashboard(props) {
  const barCharDate = [
    {
      id: 1,
      year: 2018,
      totalPrice: 80000,
    },
    {
      id: 2,
      year: 2019,
      totalPrice: 45677,
    },
    {
      id: 3,
      year: 2020,
      totalPrice: 78888,
    },
    {
      id: 4,
      year: 2021,
      totalPrice: 90000,
    },
    {
      id: 5,
      year: 2022,
      totalPrice: 4300,
    },
  ];

  const dashboardCard = [
    {
      title: "Total Cart",
      price: "500+",
      style: { backgroundColor: "#7F00FF" },
      icon: (
        <BiCar
          style={{ fontSize: "2rem", color: "white", fontWeight: "400" }}
        />
      ),
    },
    {
      title: "Total Cart 2",
      price: "500+",
      icon: (
        <BiCar
          style={{ fontSize: "2rem", color: "white", fontWeight: "400" }}
        />
      ),
    },
    {
      title: "Total Cart 3",
      price: "500+",
      icon: (
        <BiCar
          style={{ fontSize: "2rem", color: "white", fontWeight: "400" }}
        />
      ),
    },
    {
      title: "Total Cart 4",
      price: "500+",
      icon: (
        <BiCar
          style={{ fontSize: "2rem", color: "white", fontWeight: "400" }}
        />
      ),
    },
  ];
  const [chartBarData, setChartBarData] = useState({
    labels: barCharDate.map((data) => data.year),
    datasets: [
      {
        label: "Tổng doanh thu",
        data: barCharDate.map((data) => data.totalPrice),
        backgroundColor: ["rgb(85, 206, 99)"],
      },
    ],
  });

  return (
    <div className="m-container">
      <div className="m-content">
        <div className="title-content">
          <TitleContent title="DashBoard-Chart" />
        </div>
        <div className="search-box my-2">
          <div className="row justify-content-center m-0 p-0">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div className="form-group">
                <div className="w-100 font-weight-bold mb-3">
                  Tổng doanh thu
                </div>
                <div>100.000.000đ</div>
              </div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div class="form-group">
                <label for="">Chọn khung thời gian</label>
                <input type="date" />
              </div>
              {/* <div
                id="date-picker-example"
                class="md-form md-outline input-with-post-icon datepicker"
                inline="true"
              >
                <input
                  placeholder="Select date"
                  type="text"
                  id="example"
                  className="form-control"
                />
                <label for="example">Try me...</label>
                <i class="fas fa-calendar input-prefix"></i>
              </div> */}
            </div>

            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <label className="label-hidden" htmlFor="">
                tìm kiếm
              </label>
              <button className="btn btn-primary">
                <BiSearch />
                <span>Tìm Kiếm</span>
              </button>
            </div>
          </div>
        </div>
        <div className="dashboard-cards">
          {dashboardCard.map((item) => {
            return (
              <DashboardCard
                title={item.title}
                price={item.price}
                icon={item.icon}
                style={item.style}
              />
            );
          })}
        </div>
        <div className="chart-content">
          <div style={{ width: 500 }} className="bar-chart">
            <Bar data={chartBarData}></Bar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
