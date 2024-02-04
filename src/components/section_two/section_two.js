import React from 'react'
import { motion } from "framer-motion"
// Photos
import img1 from '../images/sport/img1.jpg'
import img2 from '../images/sport/img2.jpg'
import img3 from '../images/sport/img3.jpg'
import img4 from '../images/sport/img4.jpg'


const sectionTwo = () => {
  return (
    <div id="aktywność" className="overflow-hidden py-20">
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Moje zainteresowania</h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
          Uwielbiam spędzać wolny czas aktywnie, a moją ulubioną formą rekreacji jest bieganie.
          To nie tylko doskonała forma dbania o kondycję fizyczną, ale także sposób na odprężenie umysłu i cieszenie się świeżym powietrzem.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
          Bieganie nie tylko wzmacnia ciało, ale także kształtuje charakter. Każdy krok na trasie to niepowtarzalna podróż,
          która rozwija wytrzymałość fizyczną i mentalną, dodając energii do codziennego życia.
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
            <img src={img1} alt="" className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
          </motion.div>
          <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
              <img src={img4} alt="" className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <img src={img3} alt="" className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover object-top"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
              <img src={img2} alt="" className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default sectionTwo