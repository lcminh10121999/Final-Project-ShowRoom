import React, { useState } from "react";
import PropTypes from "prop-types";
import TitleContent from "../../../common/admin/Title";
import "../../../style/admin/Brand.css";
import Input from "../../../common/admin/input";
import { BiSearch, BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

Brand.propTypes = {};

function Brand(props) {
  const data = [
    {
      id: 1,
      name: "Honda",
    },
    {
      id: 2,
      name: "BMW",
    },
    {
      id: 3,
      name: "Ferrari",
    },
    {
      id: 4,
      name: "Lexus",
    },
  ];
  const [dataBrand, setDataBrand] = useState(data);
  const inputSearchStyle = {
    style: {
      background: "rgb(0, 7, 61)",
      border: "none",
      color: "#fff",
    },
  };
  return (
    <div className="m-container">
      <div className="m-content">
        <div className="title-content">
          <TitleContent title="Brand" />
        </div>
        <div className="search-box mt-3">
          <div class="row m-0">
            <div className="col-xl-12 order-2 order-xl-1 p-0">
              <div className="form-group row align-items-center m-0">
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
              </div>
            </div>
          </div>
        </div>
        <div className="list-brand">
          <div className="brand-table">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataBrand.map((item, count) => {
                  var count = count + 1;
                  return (
                    <tr>
                      <td>{count}</td>
                      <td>{item.name}</td>
                      <td className="d-flex">
                        <p className="m-0 pr-2">
                          <BiEditAlt
                            style={{
                              color: "rgba(0,128,0,1)",
                              cursor: "pointer",
                            }}
                          />
                        </p>
                        <p className="m-0 px-2">
                          <MdDeleteOutline
                            style={{
                              color: "rgba(255,0,0,1)",
                              cursor: "pointer",
                            }}
                          />
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
