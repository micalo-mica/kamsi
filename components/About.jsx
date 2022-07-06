import React from "react";
import Image from "next/image";
import Link from "next/link";
import MeImg from "../public/assets/me.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            Hi I'm Evan, a ui/ux designer skilled in delivering unique digital
            experiences through design that is fueled by empathy & driven by
            creative storytelling. I am also genuinely passionate about adding
            value to humanity through creative & innovative thinking in a bid to
            create simple solutions to complex human problems. My interest in
            becoming a web designer started while working as a car salesman. I
            was introduced to ui/ux design by a close friend. I've always been
            curious about designs but after equipping myself going through
            YouTube tutorials on ui/ux designs from scratch i was officially
            hooked not only it intellectually stimulating but it was the first
            time I found myself doing something I ever loved.
          </p>
          <p className="py-2 text-gray-600"></p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={MeImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
