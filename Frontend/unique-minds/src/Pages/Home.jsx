import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import FeatureSection from "../Components/Home/FeatureSection";
import TopEducators from "../Components/Home/FeaturedTeachers";
import CallToAction from "../Components/Home/CallToAction";
import BenefitsSection from "../Components/Home/BenifitSection";
import HowItWorks from "../Components/Home/HowItWorkSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <FeatureSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <BenefitsSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <TopEducators />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <CallToAction />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <HowItWorks />
      </motion.div>
    </motion.div>
  );
};

export default Home;
