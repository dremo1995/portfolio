import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);
  // const abouts = [
  //   {
  //     title: "Frontend",
  //     description: "React, Javascript, HTML, CSS, TailwindCSS, SASS",
  //     image: images.about01,
  //   },
  //   {
  //     title: "Backend",
  //     description: "NodeJS, ExpressJS, MongoDB",
  //     image: images.about02,
  //   },
  //   {
  //     title: "Web3",
  //     description: "Solidity, EthersJS, Ethereum Network",
  //     image: images.about03,
  //   },
  // ];
  return (
    <div className="app__about">
      <h2 className="head-text">
        Alittle about <span>Andre</span>
      </h2>

      <div className="app__profiles">
        {abouts.map(function (about, index) {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.image} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
