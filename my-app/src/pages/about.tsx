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
// import the split type library
import SplitType from "split-type";
import { useRef, useEffect } from "react";
import FallingText from "@/components/FallingText/FallingText";

function AboutPage() {
  var aboutPage = "About Me";
  var aboutMeString =
    "I'm a a recent graduate from Ohio State University, where I obtained my Bachelor of Science in Computer Science and Engineering, followed by my Master of Science in Computer Science and Engineering. With a strong passion for both machine learning/AI and full stack application development, I'm constantly exploring the exciting intersection of these fields. Beyond coding, I enjoy playing basketball and spikeball, staying active through workouts, and spending quality time with friends.";
  var backTab = "Home";

  const router = useRouter();

  function handleClick(path: string) {
    router.push(path);
  }

  return (
    <div className="bg-slate-800 flex flex-col min-h-screen">
      <div className="text-white mt-8 ml-8">
        <TypingEffect name={aboutPage} />
      </div>
      <div></div>
      <div className="mt-12 flex justify-center items-center"></div>
      <button
        className="absolute top-0 right-0 mt-8 mr-8 bg-teal-900 text-white hover:bg-blue-600 p-4 rounded-lg z-10"
        onClick={() => handleClick("/")}
      >
        Home
      </button>
      <div className="flex items-center justify-center">
        <div className="mt-20 container w-1/2 h-96 border border-white-400 flex items-center justify-center">
          <div className="text-center p-8">
            <FallingText text={aboutMeString} />
          </div>
          {/* <h4 className="text-white text-center p-8">
            I'm a recent graduate from Ohio State University, where I obtained
            my Bachelor of Science in Computer Science and Engineering, followed
            by my Master of Science in Computer Science and Engineering. With a
            strong passion for both machine learning/AI and full stack
            application development, I'm constantly exploring the exciting
            intersection of these fields. Beyond coding, I enjoy playing
            basketball and spikeball, staying active through workouts, and
            spending quality time with friends.
          </h4> */}
        </div>
      </div>
      <div className="about-image"></div>
    </div>
  );
}

export default AboutPage;
