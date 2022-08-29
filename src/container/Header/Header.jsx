import React from "react";
import "./Header.scss";
import { images } from "../../constants/images";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="app__flex badge-cmp">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello I am</p>
              <h1 className="head-text">Andre</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
