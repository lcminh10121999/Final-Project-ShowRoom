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
import "../../style/admin/SideBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SideBarSubMenu from "./SideBarSubMenu";
function SideBar(props) {
  const routes = [
    {
      path: "/admin/dashboard",
      name: "Bảng Tin",
      icon: <FaHome />,
    },
    {
      path: "/admin/category",
      name: "Quản lý danh mục",
      icon: <BiCategory />,
      subRoute: [
        {
          path: "/admin/category/list",
          name: "Danh mục sản phẩm",
          icon: <FaList />,
        },
        {
          path: "/admin/category/create",
          name: "Tạo danh mục",
          icon: <MdCreate />,
        },
      ],
    },
    {
      path: "/admin/product",
      name: "Quản lý sản phẩm",
      icon: <FaProductHunt />,
    },
    {
      path: "/admin/user",
      name: "Quản lý người dùng",
      icon: <FaUserAlt />,
    },
    {
      path: "/admin/order",
      name: "Quản lý đơn hàng",
      icon: <FaShoppingCart />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
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
      <motion.div
        animate={{ width: isOpen ? "80%" : "35%" }}
        className="sidebar"
      >
        <div className="top-section" style={{ height: isOpen ? "10%" : "10%" }}>
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
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
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
