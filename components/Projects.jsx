import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../public/assets/projects/project1.jpg";
import project3 from "../public/assets/projects/project3.jpg";
import project4 from "../public/assets/projects/project4.jpg";
import project7 from "../public/assets/projects/project7.jpg";
import project8 from "../public/assets/projects/project8.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="JEOBEST HOME DESIGN & FURNITURE"
            backgroundImg={project1}
            projectUrl="http://Figma.com/file/65JvjpAdCYrEj2ajGJ6KSp/Furniture-Page?node-id=0%3A1"
            tech="best in town"
          />

          <ProjectItem
            title="Restaurant"
            backgroundImg={project3}
            projectUrl="http://Figma.com/file/q7xXou6jiWDnoVkghNt9W9/Restaurant-Cafe?node-id=0%3A1"
            tech="We are the best"
          />
          <ProjectItem
            title="Food ordering app"
            backgroundImg={project4}
            projectUrl="https://Figma.com/proto/N7PTCp7m2Ww9CICgaU1HYZ/MK-food-ordering-app?node-id=21%3A76&starting-point-node-id=21%3A76"
            tech="We are at your service"
          />

          <ProjectItem
            title="KAMAL FASHION"
            backgroundImg={project7}
            projectUrl="http://Figma.com/file/BVib16LwGiqG4uMAGoWWeq/Ecommerce-fashion-page?node-id=3A1"
            tech="For you best quality"
          />
          <ProjectItem
            title="Creative Agency"
            backgroundImg={project8}
            projectUrl="http://Figma.com/file/y8glizRU7daxM4FPW5w5w9/CREATIVE-AGENCY"
            // tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
