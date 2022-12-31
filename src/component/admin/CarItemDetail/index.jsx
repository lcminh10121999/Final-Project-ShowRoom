import React, { useState } from "react";
import PropTypes from "prop-types";
import TitleContent from "../../../common/admin/Title";
import "../../../style/admin/CarDetail.css";
import { Bar, Line } from "react-chartjs-2";
import { FaStar } from "react-icons/fa";
CarItemDetail.propTypes = {};

function CarItemDetail(props) {
  const ratingColor = {
    yellow: "#FFBA5a",
    grey: "#a9a9a9",
  };
  const barCharDate = [
    {
      id: 1,
      month: "January",
      totalPrice: 1000000,
    },
    {
      id: 2,
      month: "February",
      totalPrice: 2000000,
    },
    {
      id: 3,
      month: "March",
      totalPrice: 0,
    },
    {
      id: 4,
      month: "April",
      totalPrice: 0,
    },
    {
      id: 5,
      month: "May",
      totalPrice: 3000000,
    },
  ];
  const barLineDate = [
    {
      id: 1,
      month: "January",
      totalPrice: 2,
    },
    {
      id: 2,
      month: "February",
      totalPrice: 4,
    },
    {
      id: 3,
      month: "March",
      totalPrice: 0,
    },
    {
      id: 4,
      month: "April",
      totalPrice: 0,
    },
    {
      id: 5,
      month: "May",
      totalPrice: 6,
    },
  ];
  const dataCommentRating = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80",
      name: "Lucas Hernandez",
      time: "10:00 22-12-2022",
      comment:
        "The GR86 is a back-to-basics sports car in the best way. It's fun to drive, reasonably priced and somewhat practical.  It can be a bit noisy and stiff-riding at times, but those downsides are easy to live with, considering all of the car's other outstanding attributes",
      rating: 3,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80",
      name: "Lucas Hernandez 2",
      time: "10:00 22-12-2022",
      comment:
        "The GR86 is a back-to-basics sports car in the best way. It's fun to drive, reasonably priced and somewhat practical.  It can be a bit noisy and stiff-riding at times, but those downsides are easy to live with, considering all of the car's other outstanding attributes",
      rating: 4,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&w=1000&q=80",
      name: "Lucas Hernandez 3",
      time: "10:00 22-12-2022",
      comment:
        "The GR86 is a back-to-basics sports car in the best way. It's fun to drive, reasonably priced and somewhat practical.  It can be a bit noisy and stiff-riding at times, but those downsides are easy to live with, considering all of the car's other outstanding attributes",
      rating: 5,
    },
  ];
  const [dataProductCommentRating, setDataProductCommentRating] =
    useState(dataCommentRating);
  const [chartBarData, setChartBarData] = useState({
    labels: barCharDate.map((data) => data.month),
    datasets: [
      {
        label: "Price",
        data: barCharDate.map((data) => data.totalPrice),
        backgroundColor: ["rgb(0, 7, 61)"],
      },
    ],
  });
  const [chartLineData, setChartLineData] = useState({
    labels: barLineDate.map((data) => data.month),
    datasets: [
      {
        label: "Total",
        data: barLineDate.map((data) => data.totalPrice),
        backgroundColor: ["rgb(0, 7, 61)"],
      },
    ],
  });

  return (
    <div className="m-container">
      <div className="title-content">
        <TitleContent title="Car Detail" />
      </div>
      <div className="car-detail">
        <div className="car-detail__wrapper">
          <div className="car-detail__top">
            <div className="car-detail__img">
              <h5>Ferrari F12 Berlinetta</h5>
              <img
                src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="car-information">
              <div className="car-info__left">
                <div className="car-group">
                  <p>
                    Name: <span>Ferrari F12 Berlinetta</span>
                  </p>
                </div>
                <div className="car-group">
                  <p>
                    Category: <span>Honda</span>
                  </p>
                  <p>
                    Brand: <span>Honda</span>
                  </p>
                </div>
                <div className="car-group">
                  <p>
                    Price: <span>500.000$</span>
                  </p>
                  <p>
                    Color: <span>Orange</span>
                  </p>
                </div>
                <div className="car-group">
                  <p>
                    Status: <span>On sale</span>
                  </p>
                </div>
              </div>
              <div className="car-info__right">
                <div className="description">Description:</div>
                <p>
                  This is Description This is Description This is Description
                  This is Description This is Description This is Description
                  This is Description This is Description This is Description
                  This is Description This is Description This is Description
                  This is Description This is Description This is Description
                  This is Description This is Description This is Description
                </p>
              </div>
            </div>
          </div>
          <div className="car-detail__bottom">
            <div className="detail-bar-chart">
              <div className="chart-title">Total Price</div>
              <div className="chart-total">
                <p>
                  Total Price: <span>6.000.000$</span>
                </p>
              </div>
              <Bar data={chartBarData}></Bar>
            </div>
            <div className="detail-line-chart">
              <div className="chart-title">Total Price</div>
              <div className="chart-total">
                <p>
                  Total Sale: <span>12</span>
                </p>
              </div>
              <Line data={chartLineData}></Line>
            </div>
          </div>
          <div className="car-product__comment">
            <div className="chart-title">Product Comment & Ratting</div>
            <div className="table">
              {dataProductCommentRating.map((item) => {
                const ratting = item.rating;
                return (
                  <div className="product-comment__ratting__group">
                    <img src={item.img} alt="" />
                    <div className="product-comment__ratting__name">
                      <div className="name">{item.name}</div>
                      <div className="time">{item.time}</div>
                      <div className="ratting">
                        {[...Array(5)].map((value, index) => {
                          const rattingValue = index + 1;

                          return (
                            <FaStar
                              color={
                                rattingValue <= ratting
                                  ? ratingColor.yellow
                                  : ratingColor.grey
                              }
                            />
                          );
                        })}
                      </div>
                      <div className="comment">{item.comment}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarItemDetail;
