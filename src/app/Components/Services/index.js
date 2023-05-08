import { motion } from "framer-motion";
import React from "react";
import serviceData from "../../assets/data/serviceData";
import { Color } from "../configs/Color";

function Services() {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="flex items-center justify-between md:justify-start gap-6 md:gap-2 flex-wrap">
        {serviceData.map((item, index) => (
          <motion.div
            whileHover={{ sclae: 1.2 }}
            className="flex space-x-2 my-2 px-1 py-2 rounded-sm items-center w-[80%] sm:w-[40%] md:w-[23%] hover:-top-2 duration-300"
            style={{ background: `${item.bg}` }}
            key={index}
          >
            <span
              className={`w-8 h-8 bg-[${Color.primarycolor}] text-white flex items-center justify-center rounded-full`}
            >
              {item.icon}
            </span>
            <div>
              <p
                className={`text-[${Color.primarycolor}] text-sm font-semibold py-1`}
              >
                {item.title}
              </p>
              <p className="text-xs text-[#999]">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
