import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from '@/app/Background.module.css';





type Props = {};

export default function HeroHead({}: Props) {
  return (

    <main
    className={`flex items-center justify-center h-[50rem] ${styles.backgroundComponent}`}
  >
    <div className="max-w-[1200px] px-6 md:pt-[50px] md:pb-[60px]  bg-black">
      <div className="flex flex-col px-36 items-center text-center">
        <h1 className="text-6xl simplyrounded.variable font-bold md:text-4xl lg:text-6xl mb-4 space-x-1">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ef4444]">
            10x your Workflow
          </span>
          {" "}with{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ef4444]">
            Profitable
          </span>{" "}
          AI Solutions
        </h1>
        <p className="text-xl md:text-2xl leading-8 mb-4">
          We help small businesses and tech startups build AI tools and Automation
          workflows that scale at rapid speeds.{" "}
          <span className="font-bold">
            Customized AI tools and Automation workflows
          </span>{" "}
          that fit your needs.
        </p>
        <div className="mt-8">
          <Button size="xl">
            <Link href="#" className="text-white text-2xl">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </main>

  );
}
