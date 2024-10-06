import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


type Props = {};

export default function HeroHead({}: Props) {
  return (
    <main className=" container mx-auto max-w-[1200px]">
      <div className="container mx-auto px-6 md:pt-[50px] md:pb-[60px]">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h1 className={`text-6xl simplyrounded.variable font-bold md:text-4xl lg:text-6xl mb-4`}>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ef4444]">10x your Workflow </span>
            with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ef4444]"> Profitable</span>  AI Solutions
            </h1>
            <p className="text-xl md:text-2xl leading-8 mb-">
              We help small businesses and tech startups build AI tools and
              Automation workflows that scale at rapid speeds.
              <span className="font-bold"> Customized AI tools and Automation workflows</span>{" "}
              that fit your needs.
            </p>
            <div className="mt-8">
              <Button size={"xl"}>
                <Link href={"#"} className="text-white text-2xl">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
