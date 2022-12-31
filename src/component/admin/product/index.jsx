import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TitleContent from "../../../common/admin/Title";
import { ImPriceTag } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { BiEditAlt, BiSearch } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../../style/admin/product.css";
import { useState } from "react";
import Input from "../../../common/admin/input";
import CarItem from "../CarItem";
Product.propTypes = {};

function Product(props) {
  const defaultData = {
    name: "",
    img: "",
    category: "",
    brand: "",
    color: "",
    price: "",
    status: "",
  };
  const dataTable = [
    {
      name: "name",
      img: "https://finewinestore.vn/img/ruou-vang-phap-nhap-khau-hang-va-bang-gia-ruou-vang-phap-uy-tin-3.jpg",
      category: "category",
      brand: "brand",
      color: { backgroundColor: "rgba(0,128,0,0.2)" },
      price: "price",
      status: "status",
    },
    {
      name: "name",
      img: "https://finewinestore.vn/img/ruou-vang-phap-nhap-khau-hang-va-bang-gia-ruou-vang-phap-uy-tin-3.jpg",
      category: "category",
      brand: "brand",
      color: { backgroundColor: "rgba(0,128,0,0.2)" },
      price: "price",
      status: "status",
    },
    {
      name: "name",
      img: "https://finewinestore.vn/img/ruou-vang-phap-nhap-khau-hang-va-bang-gia-ruou-vang-phap-uy-tin-3.jpg",
      category: "category",
      brand: "brand",
      color: { backgroundColor: "rgba(0,128,0,0.2)" },
      price: "price",
      status: "status",
    },
  ];
  const [dataProductTable, setDataProductTable] = useState(dataTable);
  const [loading, serLoading] = useState(true);
  // const flag = true;
  // useEffect(() => {
  //   setDataProductTable(dataTable);
  // }, [flag]);

  const carItemData = [
    {
      id: 1,
      name: "Ferrari F12 Berlinetta",
      category: "Sport Car",
      img: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      brand: "Ferrari",
      price: "1.000.000$",
    },
    {
      id: 2,
      name: "Ferrari F12 Berlinetta",
      category: "Sport Car",
      img: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      brand: "Ferrari",
      price: "1.000.000$",
    },
    {
      id: 3,
      name: "Ferrari F12 Berlinetta",
      category: "Sport Car",
      img: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      brand: "Ferrari",
      price: "1.000.000$",
    },
    {
      id: 4,
      name: "Ferrari F12 Berlinetta",
      category: "Sport Car",
      img: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      brand: "Ferrari",
      price: "1.000.000$",
    },
    {
      id: 5,
      name: "Ferrari F12 Berlinetta",
      category: "Sport Car",
      img: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      brand: "Ferrari",
      price: "1.000.000$",
    },
  ];
  const inputSearchStyle = {
    style: {
      background: "rgb(0, 7, 61)",
      border: "none",
      color: "#fff",
    },
  };
  console.log(dataProductTable);
  return (
    <div className="m-container">
      <div className="title-content">
        <TitleContent title="Products List" />
      </div>
      <div className="product-search">
        <Input
          style={inputSearchStyle.style}
          placeholdercolor="red"
          type="text"
          placeholder="Search"
        />
        <span className="px-2">
          <BiSearch color="#fff" />
        </span>
      </div>
      <div className="filter-car__wrapper">
        <div className="filter-car__item filter-car-brand">
          <select className="" name="" id="">
            <option disabled selected hidden value="">
              --Brand--
            </option>
            <option value="">BMW</option>
            <option value="">Toyota</option>
            <option value="">Audi</option>
          </select>
        </div>
        <div className="filter-car__item  filter-car-status">
          <select name="" id="">
            <option disabled selected hidden value="">
              --Status--
            </option>
            <option value="">New</option>
            <option value="">Pending</option>
            <option value="">Upcoming</option>
          </select>
        </div>
      </div>
      <div className="list-car">
        {carItemData.map((item) => {
          return (
            <CarItem
              carName={item.name}
              carPrice={item.price}
              carCategory={item.category}
              carBrand={item.brand}
              carImgUrl={item.img}
              key={item.id}
              carId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
