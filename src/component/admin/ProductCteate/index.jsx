import React from "react";
import PropTypes from "prop-types";
import TitleContent from "../../../common/admin/Title";
import "../../../style/admin/ProductCreate.css";
import Input from "../../../common/admin/input";
import { borderRadius } from "@mui/system";
import { Editor } from "@tinymce/tinymce-react";
import Button from "../../../common/admin/button";

ProductCreate.propTypes = {};

function ProductCreate(props) {
  const inputProductStyle = {
    style: {
      background: "rgb(45, 51, 89)",
      border: "none",
      color: "white",
      borderRadius: "0px",
      height: "100%",
    },
  };
  return (
    <div className="m-container">
      <div className="m-content">
        <div className="title-content">
          <TitleContent title="Create Product" />
        </div>
        <div className="product-create__form">
          <form action="">
            <div className="form-top">
              <div className="input-group__product">
                <Input
                  style={inputProductStyle.style}
                  label="Name"
                  type="text"
                  placeholder="name"
                />
              </div>
              <div className="input-group__product">
                <Input
                  style={inputProductStyle.style}
                  label="Price"
                  type="text"
                  placeholder="price"
                />
              </div>
              <div className="input-group__product">
                <Input
                  style={inputProductStyle.style}
                  label="Inventory"
                  type="text"
                  placeholder="inventory"
                />
              </div>
              <div className="input-group__product">
                <div className="select-product__form">
                  <label htmlFor="">Category</label>
                  <select className="" name="" id="">
                    <option disabled selected hidden value="">
                      --Category--
                    </option>
                    <option value="">Sport car</option>
                    <option value="">SUV</option>
                    <option value="">Luxury</option>
                    <option value="">Van</option>
                  </select>
                </div>
              </div>
              <div className="input-group__product">
                <div className="select-product__form">
                  <label htmlFor="">Brand</label>
                  <select className="shadow-none" name="" id="">
                    <option disabled selected hidden value="">
                      --Brand--
                    </option>
                    <option value="">Honda</option>
                    <option value="">BMW</option>
                    <option value="">Ferrari</option>
                    <option value="">Audi</option>
                  </select>
                </div>
              </div>
              <div className="input-group__product">
                <div className="select-product__form">
                  <label htmlFor="">Status</label>
                  <select className="" name="" id="">
                    <option disabled selected hidden value="">
                      --Status--
                    </option>
                    <option value="">On Sale</option>
                    <option value="">Upcoming</option>
                    <option value="">Pending</option>
                    <option value="">New</option>
                  </select>
                </div>
              </div>
              <div className="input-group__product">
                <Input
                  label="Product Img"
                  type="file"
                  style={inputProductStyle.style}
                />
              </div>
              <div className="input-group__product">
                <div className="form-group">
                  <label for="formFileMultiple" class="form-label">
                    Product Multiple Img
                  </label>
                  <input
                    style={inputProductStyle.style}
                    class="form-control"
                    type="file"
                    multiple
                  />
                </div>
              </div>
              <div className="input-group__product">
                <div className="form-group">
                  <label for="exampleColorInput" class="form-label">
                    Product Color
                  </label>
                  <input
                    type="color"
                    class="form-control form-control-color"
                    id="exampleColorInput"
                    value="#ffd700"
                    title="Choose your color"
                    style={{
                      background: "rgb(45, 51, 89)",
                      border: "none",
                      color: "white",
                      borderRadius: "0px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="form-middle">
              <Editor />
            </div>
            <div className="form-bottom">
              <Button className="button-58" type="submit" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
