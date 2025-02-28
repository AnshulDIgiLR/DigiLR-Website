import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    // <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <div ref={ref} className="w-[100%] text-center py-10 mx-auto max-w-6xl" id="about">
        {/* Header Section */}
        <div className="mb-8">
          <h5 className="font-semibold uppercase tracking-wide">
            — DigiLR Report —
          </h5>
          <h3 className="text-3xl font-bold">
            Transforming Land Administration
          </h3>
        </div>

        {/* Statistics Section (Displayed in Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-blue-600">{inView ? <CountUp start={0} end={1000000} duration={3} delay={0} separator="," /> : "1M"}+</h2>
            <h6 className="text-gray-700">Reports issued</h6>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-blue-600">
            {inView && <CountUp start={0} end={28} duration={3} delay={0} />}+
            </h2>
            <h6 className="text-gray-700">States</h6>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-blue-600">{inView && <CountUp start={0} end={600} duration={3} delay={0} />}+</h2>
            <h6 className="text-gray-700">Districts</h6>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-blue-600">{inView && <CountUp start={0} end={500000} duration={3} delay={0} seperator="," />}+</h2>
            <h6 className="text-gray-700">Transactions</h6>
          </div>
        </div>
        <img
          src="./Ownership Details.png"
          alt="Document Icon"
          className="w-screen h-screen p-1"
        />
      </div>
    // </ScrollTrigger>
  );
}
