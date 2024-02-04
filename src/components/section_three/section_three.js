import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 1.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const SectionTwo = () => {
  const [daysSinceBiegam, setDaysSinceBiegam] = useState(0);

  useEffect(() => {
    const startDate = new Date('2021-11-18');
    const currentDate = new Date();

    const differenceInDays = Math.floor(
      (currentDate - startDate) / (1000 * 60 * 60 * 24 + 1)
    );

    setDaysSinceBiegam(differenceInDays);
  }, []);

  return (
    <div className="bg-gray-900 py-24 sm:py-32 rekt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Niech każdy krok stanie się częścią Twojej niezwykłej podróży</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">Odkryj piękno codziennych nawyków</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <motion.div variants={item} viewport={{ once: true }} className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">Dni codzienniego biegania</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">{daysSinceBiegam}</dd>
            </motion.div>
            <motion.div variants={item} viewport={{ once: true }} className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">Flat platform fee</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">3%</dd>
            </motion.div>
            <motion.div variants={item} viewport={{ once: true }} className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">Uptime guarantee</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">99.9%</dd>
            </motion.div>
            <motion.div variants={item} viewport={{ once: true }} className="flex flex-col bg-white/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-300">Paid out to creators</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">$70M</dd>
            </motion.div>
          </dl>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionTwo;
