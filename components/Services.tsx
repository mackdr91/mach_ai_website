import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { FaCheck } from "react-icons/fa";

export default function Services() {
  return (
    <section className="container mx-auto px-10 p-24">
      <h2 className="text-center mb-2 text-[2.5rem] mt-10 font-bold">
        Our{" "}
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ef4444] ">
          Services
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-center">
        By Leveraging AI & Automation, we develop a suite of AI tools 10x faster
        than traditional coding methods.
      </p>

      <div className="flex flex-col lg:flex-row gap-1 md:gap-8 justify-center py-10 px-10">
        <Card className="py-10 px-8" >
          <CardHeader className="text-[2.0rem] font-bold text-center">
            AI Automation Workflows
          </CardHeader>
          <CardContent >
            <p className="text-center">
              Enhance your workflow with our state-of-the-art AI automation. Our
              AI tools are designed to automate repetitive tasks, reduce manual
              efforts, and streamline your workflow.
            </p>
            <div className="flex justify-center mt-4">
              <ul>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500"><FaCheck /></span>Put off repetitive tasks

                </li>
                <li className="flex items-center">
                <span className="mr-2 text-green-500"><FaCheck /></span>Automate workflows for increased efficiency
                </li>
                <li className="flex items-center">
                <span className="mr-2 text-green-500"><FaCheck /></span>Enhance productivity & User Experience
                </li>
              </ul>
            </div>
          </CardContent>
        </Card >
        <Card className="py-10 px-8 ">
          <CardHeader className="text-[2.0rem] font-bold text-center">
            MVP Development
          </CardHeader>
          <CardContent className="text-center">
            <p>
              Get customized AI solutions tailored to your specific needs. From
              automated chatbots to voice assistants, our AI solutions are
              designed to meet your unique business needs.
            </p>
            <div className="flex justify-center mt-4">
              <ul>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500"><FaCheck /></span>Complete functionality

                </li>
                <li className="flex items-center">
                <span className="mr-2 text-green-500"><FaCheck /></span>From development to production
                </li>
                <li className="flex items-center">
                <span className="mr-2 text-green-500"><FaCheck /></span>User-friendly interface
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
