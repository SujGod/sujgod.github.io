import { TypingEffect } from "@/components/TypingEffect/TypingEffect";
import React from "react";
import { Box } from "@/components/Box/Box";
import { Menu } from "@/components/Menu/Menu";
import Image from "next/image";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/navigation";
import { HoverCard } from "@/components/HoverCard/HoverCard";
import { HomeIcon } from "@/components/HomeIcon/HomeIcon";
import "../app/pages.css";

function EducationPage() {
  var educationPage = "Education";

  const router = useRouter();

  function handleClick(path: string) {
    router.push(path);
  }

  return (
    <div className="bg-slate-800 flex flex-col min-h-screen">
      <div className="text-white mt-8 ml-8">
        <TypingEffect name={educationPage} />
      </div>
      <div></div>
      <div className="mt-12 flex justify-center items-center">
        <HoverCard
          school="Highland High School"
          yearDuration="Aug 2014 - May 2018"
          schoolType="highland"
        />
        <HoverCard
          school="The Ohio State University"
          yearDuration="Aug 2018 - May 2022"
          degree="Bachelor of Science - CSE"
          schoolType="ohio-state"
        />
        <HoverCard
          school="The Ohio State University"
          yearDuration="Aug 2022 - May 2023"
          degree="Master of Science - CSE"
          schoolType="ohio-state"
        />
      </div>
      <button
        className="absolute top-0 right-0 mt-8 mr-8 bg-teal-900 text-white hover:bg-blue-600 p-4 rounded-lg z-10"
        onClick={() => handleClick("/")}
      >
        Home
      </button>
      <div className="education-image"></div>
    </div>
  );
}

export default EducationPage;
