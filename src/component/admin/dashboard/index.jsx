import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../style/admin/Dashboard.css";
import { Bar, Pie } from "react-chartjs-2";
import { AiOutlineUser } from "react-icons/ai";
import { BsArchive } from "react-icons/bs";
import { Chart as ChartJS } from "chart.js/auto";
import TitleContent from "../../../common/admin/Title";
import Input from "../../../common/admin/input";
import Button from "../../../common/admin/button";
import { BiSearch, BiCar, BiDollar, BiCart } from "react-icons/bi";
import DashboardCard from "../DashboarchCard";
import DatePicker from "react-datepicker";
Dashboard.propTypes = {};

function Dashboard(props) {
  const barCharDate = [
    {
      id: 1,
      month: "January",
      totalPrice: 80000,
    },
    {
      id: 2,
      month: "February",
      totalPrice: 45677,
    },
    {
      id: 3,
      month: "March",
      totalPrice: 78888,
    },
    {
      id: 4,
      month: "April",
      totalPrice: 90000,
    },
    {
      id: 5,
      month: "May",
      totalPrice: 4300,
    },
  ];
  const pieCharDate = [
    {
      id: 1,
      brand: "Honda",
      total: 3,
    },
    {
      id: 2,
      brand: "Toyota",
      total: 2,
    },
    {
      id: 3,
      brand: "VinFat",
      total: 1,
    },
    {
      id: 4,
      brand: "Toyota",
      total: 2,
    },
    {
      id: 5,
      brand: "Toyota",
      total: 7,
    },
  ];
  const dashboardCard = [
    {
      title: "TOTAL SALE",
      price: "500",
      // ismoney: true,
      style: { backgroundColor: "#fff" },
      icon: (
        <BiCar
          className="card-icon"
          style={{
            fontSize: "2rem",
            color: "crimson",
            fontWeight: "400",
            backgroundColor: "rgba(255,0,0,0.2)",
          }}
        />
      ),
    },
    {
      title: "USERS",
      price: "500",
      // ismoney: false,
      style: { backgroundColor: "#fff" },
      icon: (
        <AiOutlineUser
          className="card-icon"
          style={{
            fontSize: "2rem",
            color: "goldenrod",
            fontWeight: "400",
            backgroundColor: "rgba(218,165,32,0.2)",
          }}
        />
      ),
    },
    {
      title: "ORDERS",
      price: "500",
      // ismoney: true,
      style: { backgroundColor: "#fff" },
      icon: (
        <BiCart
          className="card-icon"
          style={{
            fontSize: "2rem",
            color: "green",
            fontWeight: "400",
            backgroundColor: "rgba(0,128,0,0.2)",
          }}
        />
      ),
    },
    {
      title: "TOTAL PRICE",
      price: "500.000",
      // ismoney: false,
      style: { backgroundColor: "#fff" },
      icon: (
        <BiDollar
          className="card-icon"
          style={{
            fontSize: "2rem",
            color: "purple",
            fontWeight: "400",
            backgroundColor: "rgba(128,0,128,0.2)",
          }}
        />
      ),
    },
  ];
  const [chartBarData, setChartBarData] = useState({
    labels: barCharDate.map((data) => data.month),
    datasets: [
      {
        label: "Tổng doanh thu",
        data: barCharDate.map((data) => data.totalPrice),
        backgroundColor: [
          "rgba(255,0,0,0.2)",
          "rgba(218,165,32,0.2)",
          "rgba(0, 7, 61, 0.2)",
          "rgba(0,128,0,0.2)",
          "rgba(128,0,128,0.2)",
        ],
      },
    ],
  });
  const [pieChartBarData, setPieChartBarData] = useState({
    labels: pieCharDate.map((data) => data.brand),
    datasets: [
      {
        data: pieCharDate.map((data) => data.total),
        backgroundColor: [
          "rgba(255,0,0,0.2)",
          "rgba(218,165,32,0.2)",
          "rgba(0, 7, 61, 0.2)",
          "rgba(0,128,0,0.2)",
          "rgba(128,0,128,0.2)",
        ],
      },
    ],
  });
  return (
    <div className="m-container">
      <div className="title-content">
        <TitleContent title="DashBoard-Chart" />
      </div>
      {/* <div className="search-box my-2">
        <div className="row justify-content-center m-0 p-0">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="form-group">
              <div className="w-100 font-weight-bold mb-3">Total Price</div>
              <div>100.000.000đ</div>
            </div>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div class="form-group">
              <label for="">Time</label>
              <input type="date" />
            </div>
            <div
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
              </div>
          </div>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <label className="label-hidden" htmlFor="">
              Fill
            </label>
            <button className="btn btn-primary">
              <BiSearch />
              <span>Tìm Kiếm</span>
            </button>
          </div>
        </div>
      </div> */}
      <div className="dashboard-cards">
        {dashboardCard.map((item) => {
          return (
            <DashboardCard
              class={item.class}
              title={item.title}
              price={item.price}
              icon={item.icon}
              style={item.style}
            />
          );
        })}
      </div>
      <div className="chart-content pt-2">
        <div className="chart bar-chart">
          <div className="chart-title">Total Price</div>
          <Bar data={chartBarData}></Bar>
        </div>
        <div className="chart pie-chart">
          <div className="chart-title">Brand Sale</div>
          <Pie data={pieChartBarData}></Pie>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
