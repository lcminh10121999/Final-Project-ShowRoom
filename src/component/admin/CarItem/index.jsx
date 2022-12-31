import React from "react";
import PropTypes from "prop-types";
import { ImPriceTag } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { BiEditAlt, BiSearch } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
CarItem.propTypes = {};

function CarItem(props) {
  const { carName, carCategory, carBrand, carPrice, carImgUrl, carId } = props;
  return (
    <div className="car-item">
      <div className="car-item__top">
        <div className="car-item__title">
          <h5>{carName}</h5>
          <span>
            <Link
              style={{ color: "#fff" }}
              to={`/admin/product/detail/${carId}`}
            >
              <AiOutlineEye />
            </Link>
          </span>
        </div>
        <div className="car-brand__category">
          <p>{carCategory}</p>
          <p>{carBrand}</p>
        </div>
      </div>
      <div className="car-img">
        <img src={carImgUrl} alt="" />
      </div>
      <div className="car-item__bottom">
        <div className="car-item__left">
          <p>
            <ImPriceTag style={{ color: "#ffd700" }} />
          </p>
          <span>{carPrice}</span>
        </div>
        <div className="car-item__right">
          <p>
            <BiEditAlt style={{ color: "rgba(0,128,0,1)" }} />
          </p>
          <p>
            <MdDeleteOutline style={{ color: "rgba(255,0,0,1)" }} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
