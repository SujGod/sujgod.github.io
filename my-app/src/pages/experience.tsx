import { TypingEffect } from "@/components/TypingEffect/TypingEffect";
import React, { useState } from "react";
import { Box } from "@/components/Box/Box";
import { Menu } from "@/components/Menu/Menu";
import Image from "next/image";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";
import { SideCard } from "@/components/SideCard/SideCard";
import { HomeIcon } from "@/components/HomeIcon/HomeIcon";
import { ExpCard } from "@/components/ExpCard/ExpCard";
import "../app/pages.css";

function ExperiencePage() {
  var experiencePage = "Experience";
  var backTab = "Home";

  const router = useRouter();

  function handleClick(path: string) {
    router.push(path);
  }

  return (
    <div className="bg-slate-800 flex flex-col min-h-screen">
      <div className="text-white mt-8 ml-8">
        <TypingEffect name={experiencePage} />
      </div>
      <div></div>
      <div className="flex flex-row mt-12 mb-24">
        <ExpCard
          experience="J.P. Morgan Chase"
          position="Software Engineering Intern"
          duration="June 7th - August 13th"
        ></ExpCard>
        {/* <SideCard
          experience="J.P. Morgan Chase"
          position="Software Engineering Intern"
          duration="June 7th - August 13th"
        ></SideCard> */}
      </div>
      <button
        className="absolute top-0 right-0 mt-8 mr-8 bg-teal-900 text-white hover:bg-blue-600 p-4 rounded-lg z-10"
        onClick={() => handleClick("/")}
      >
        Home
      </button>
      <div className="experience-image"></div>
    </div>
  );
}

export default ExperiencePage;
