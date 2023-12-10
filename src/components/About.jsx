import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import PDFViewer from "./resumeViewer";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '30px',
  };
  const [showPDF, setShowPDF] = useState(false);
  const pdfUrl = 'https://dochub.com/m/shared-document/studya999/xgNyr6qwbkByeQ5RA5EbY2/suryateja-chakkapalli-resume-pdf?dt=1--iuykRsQs2P6cVxVnL';
  // const pdfUrl = '../assets/resume.pdf';
  // const pdfUrl = 'https://publuu.com/flip-book/326186/751382';
  const handleShowPDF = () => {
    console.log('sdsgs')
    setShowPDF(true);
  };

  const handleClosePDF = () => {
    setShowPDF(false);
  };

  const onClickHandler = ()=>{
    window.open(pdfUrl,'_blank')
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <button onClick={()=>{onClickHandler()}} style={buttonStyle}>
          Find My resume here
        </button>
        {/* {showPDF && <PDFViewer pdfUrl={pdfUrl} onClose={handleClosePDF} />} */}


      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
