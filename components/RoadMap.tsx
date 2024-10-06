import React from "react";
import { CardC, CardContent, CardHeader } from "./ui/card";
import { FaCheckCircle } from "react-icons/fa";

export default function RoadMap() {
  return (
    <section className="flex flex-col items-center mx-auto px-10">
      <div className="container mx-auto px-6 md:pt-[40px] md:pb-[50px]">
        <h2 className="text-center mb-2 text-[2.5rem] mt-10 simplyrounded.variable font-bold">
          The<span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ef4444] "> Mach X Roadmap </span>Process
        </h2>
        <p className="text-xl md:text-2xl text-center">
          We help go from zero to 100 at Mach speed.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <CardC className="py-10  border transition-colors border-orange-500 hover:bg-orange-600 hover:border-white duration-500 rounded-2xl">
          <CardHeader className="text-[2.0rem] font-bold text-center">
            1. Research & Development
          </CardHeader>
          <CardContent>
            <p className=" text-xl">
              In this crucial stage, we start with a deep understanding of your
              business. Our team will analyze your requirements, design a
              solution, and bring it to life. Our goal is to have a full
              understanding of your needs and how we can deliver excellence AI
              automation tools at Mach speed.
            </p>
            <div className="mt-4 flex justify-center">
              <ul className="space-y-2">
                <li className="flex items-center text-xl">
                  <span className="mr-2 text-green-500 text-xl">
                    <FaCheckCircle />
                  </span>{" "}
                  Tailored development plans
                </li>

                <li className="flex items-center text-xl">
                  <span className="mr-2 text-green-500 text-xl">
                    <FaCheckCircle />
                  </span>{" "}
                  In-depth research and analysis
                </li>

                <li className="flex items-center text-xl">
                  <span className="mr-2 text-green-500 text-xl">
                    <FaCheckCircle />
                  </span>{" "}
                  Identify optimal AI an automation workflows
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-4"></div>
          </CardContent>
        </CardC>
        <CardC className="py-10 border transition-colors border-orange-500 hover:bg-orange-600 hover:border-white duration-500 rounded-2xl">
          <CardHeader className="text-[2.0rem] font-bold text-center">
            2. Design, Development & Deployment
          </CardHeader>
          <CardContent>
            <p className=" text-xl">
              At this stage, our priority is to deliver fast, efficient, and
              scalable AI automation solutions that seamlessly address your
              unique challenges. Expect tangible results within the first week,
              setting the foundation for continued growth and success.
            </p>
            <div className="mt-4 flex justify-center">
              <ul className="space-y-2">
                <li className="flex items-center text-xl">
                  <span className="mr-2 text-green-500 text-xl">
                    <FaCheckCircle />
                  </span>{" "}
                  Custom solution design & development
                </li>

                <li className="flex items-center text-xl">
                  <span className="mr-2 text-green-500 text-xl">
                    <FaCheckCircle />
                  </span>{" "}
                  Immediate implementation to your existing or new systems
                </li>

                <li className="flex items-center text-xl">
                  <span className="mr-2 text-green-500 text-xl">
                    <FaCheckCircle />
                  </span>{" "}
                  Continuous feedback and early impact
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-4"></div>
          </CardContent>
        </CardC>
      </div>
    </section>
  );
}
