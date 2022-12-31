import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaHome,
  FaProductHunt,
  FaUserAlt,
  FaShoppingCart,
  FaBars,
  FaList,
  FaAngleDown,
} from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import "../../style/admin/SideBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SideBarSubMenu from "./SideBarSubMenu";
import TopNav from "./TopNav";
function SideBar(props) {
  const routes = [
    {
      path: "/admin/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/admin/category",
      name: "Category",
      icon: <BiCategory />,
      subRoute: [
        {
          path: "/admin/category/list",
          name: "List Category",
          icon: <FaList />,
        },
        {
          path: "/admin/category/create",
          name: "Create Category",
          icon: <MdCreate />,
        },
      ],
    },
    ,
    {
      path: "/admin/brand",
      name: "Brand",
      icon: <SiBrandfolder />,
      subRoute: [
        {
          path: "/admin/brand/list",
          name: "List Brand",
          icon: <FaList />,
        },
        {
          path: "/admin/brand/create",
          name: "Create Brand",
          icon: <MdCreate />,
        },
      ],
    },
    {
      path: "/admin/product",
      name: "Product",
      icon: <FaProductHunt />,
      subRoute: [
        {
          path: "/admin/product/list",
          name: "List Product",
          icon: <FaList />,
        },
        {
          path: "/admin/product/create",
          name: "Create Product",
          icon: <MdCreate />,
        },
      ],
    },
    {
      path: "/admin/user",
      name: "User",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/order",
      name: "Order",
      icon: <FaShoppingCart />,
    },
  ];

  const [isOpen, setIsOpen] = useState(true);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const test = "205px + 10px 38px + 10px";
  const styleTopNavIsOpen = {
    width: "84%",
    left: "calc(16%)",
  };
  const styleTopNavIsNotOpen = {
    width: "96.48%",
    left: "calc(3.5%)",
  };
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div
      className="main-container"
      style={{
        width: isOpen ? "20%" : "10%",
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 15,
        },
      }}
    >
      <TopNav style={isOpen ? styleTopNavIsOpen : styleTopNavIsNotOpen} />
      <motion.div
        animate={{ width: isOpen ? "80%" : "35%" }}
        className="sidebar"
      >
        <div className="top-section" style={{ height: isOpen ? "6%" : "6%" }}>
          {isOpen && (
            <motion.h3
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="logo"
            >
              FiboErp
            </motion.h3>
          )}
          {/* <div className="bars">
            <FaBars onClick={toggle} />
          </div> */}

          <motion.div
            className="bars"
            animate={isOpen ? { rotate: -90 } : { rotate: 90 }}
          >
            <FaAngleDown onClick={toggle} />
          </motion.div>
        </div>
        <section className="routes">
          {routes.map((route) => {
            if (route.subRoute) {
              return (
                <SideBarSubMenu
                  showAnimation={showAnimation}
                  route={route}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  key={route.name}
                />
              );
            }

            return (
              <NavLink
                activeClassName="active"
                to={route.path}
                key={route.name}
                className="link"
              >
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
              </NavLink>
            );
          })}
        </section>
      </motion.div>
    </div>
  );
}

export default SideBar;
