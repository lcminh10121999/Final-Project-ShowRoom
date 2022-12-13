import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../style/admin/SideBar.css";
import { useState } from "react";
import { useEffect } from "react";

SideBarSubMenu.propTypes = {};

function SideBarSubMenu({ showAnimation, route, isOpen, setIsOpen }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setIsOpen(true);
  };
  const showSubMenuAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const subMenuItemAnimation = {
    hidden: (index) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (index + 3) * 0.1,
      },
    }),
    show: (index) => ({
      x: 0,
      transition: {
        duration: (index + 3) * 0.1,
      },
    }),
  };

  useEffect(() => {
    if (!isOpen) {
      setIsSubMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu sub-link-hover" onClick={toggleSubMenu}>
        <div className="menu-item">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link-text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div animate={isSubMenuOpen ? { rotate: -90 } : { rotate: 0 }}>
            <FaAngleDown />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isSubMenuOpen && (
          <motion.div
            className="sub-menu"
            variants={showSubMenuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {route.subRoute.map((subroute, index) => (
              <motion.div
                variants={subMenuItemAnimation}
                custom={index}
                key={index}
              >
                <NavLink
                  activeClassName="active"
                  to={subroute.path}
                  className="link"
                >
                  <div className="icon">{subroute.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link-text"
                      >
                        {subroute.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideBarSubMenu;
