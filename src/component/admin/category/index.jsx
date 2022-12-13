import React from "react";
import PropTypes from "prop-types";
import TitleContent from "../../../common/admin/Title";
import { AiOutlinePlus } from "react-icons/ai";
import "../../../style/admin/Category.css";

Category.propTypes = {};

function Category(props) {
  return (
    <div className="m-container">
      <div className="m-content">
        <div className="title-content">
          <TitleContent title="Danh mục sản phẩm" />
        </div>
        <div className="search-box mt-3">
          <div class="row m-0">
            <div className="col-xl-12 order-2 order-xl-1 p-0">
              <div className="form-group row align-items-center m-0">
                <div className="col-auto">
                  <button className="btn btn-success">
                    <AiOutlinePlus />
                    <span className="mx-2">Thêm mới danh mục</span>
                  </button>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 box-search-category">
                  adsd
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
