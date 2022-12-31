import React from "react";
import PropTypes from "prop-types";
import { BiSearch, BiCar } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
DashboardCard.propTypes = {};

function DashboardCard(props) {
  return (
    <div className="single-card" style={props.style}>
      <div className="card-content">
        <div className="card-left">
          <h4>{props.title}</h4>
          <span>{props.price}</span>
        </div>
        <div className="card-right">
          {/* <div
            className={
              props.ismoney ? "percentage positive" : "percentage negative"
            }
          >
            20%
            <AnimatePresence>
              <motion.div
                animate={props.ismoney ? { rotate: -180 } : { rotate: 0 }}
                style={{ display: "flex", alignSelf: "center" }}
              >
                <FaAngleDown />
              </motion.div>
            </AnimatePresence>
          </div> */}
          <span>{props.icon}</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
