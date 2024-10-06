import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center p-16">
        <Image
          width={150}
          height={100}
          src="/images/Mach X.png"
          alt="Logo"
          className="object-scale-down"
        />
        <div className="space-y-2 text-center">
          <h3 className="text-3xl">
            Questions? Reach out
          </h3>
          <p className="text-lg">You can reach out to us at <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#ef4444]">domonickmack@machxai.com</span> for any questions! </p>
        </div>
        <div className="mt-8">
              <Button size={"xl"}>
                <Link href={"#"} className="text-white text-2xl">Email Us</Link>
              </Button>
            </div>
      </div>
    </footer>
  );
}
