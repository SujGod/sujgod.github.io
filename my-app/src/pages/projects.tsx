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

function ProjectsPage() {
  var aboutPage = "Projects";
  var aboutMeString =
    "I am a recent Ohio State graduate of Computer Science.\nI completed both my Bachelor of Science in Computer Science and Engineering and then my Master of Science in Computer Science and Engineering.\nI am interested in both machine learning/AI and full stack application development. For fun I like to play basketball and spikeball, work out, and hang out with friends.";
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
      <div className="projects-image"></div>
    </div>
  );
}

export default ProjectsPage;
