'use client'
import { Barlow } from "next/font/google";
import { Fraunces } from "next/font/google";
import NavBar from "./components/NavBar";
import TextFigures from "./components/TextFigures";
import Testimonials from "./components/Testimonials";
import Bfooter from "./components/Bfooter";
import Socials from "./components/Socials";

const barlow = Barlow({
  weight: ["600"],
  subsets: ['latin']
});

const fraunces = Fraunces({
  weight: ["700", "900"],
  subsets: ['latin']
})

export default function Home() {
  return (
    <div className="bg-White">
      <NavBar />
      <TextFigures />
      <Testimonials />
      <Bfooter />
      <Socials />
    </div>
  );
}
