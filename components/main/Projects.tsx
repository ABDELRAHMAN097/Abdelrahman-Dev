import React from "react";
import ProjectCard from "../sub/ProjectCard";
// import ActiveSlider from "../sub/ActiveSlider";

const Projects = () => {

  return (
    <div
      className="flex flex-col items-center justify-center py-5"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
       <div className="w-full flex flex-wrap gap-5 px-10 justify-center">
        <ProjectCard
          src="/project03.png"
          title="Modern React.js Dental center"
          description="Full Stack is a medical online booking site using React.js and other libraries."
          projectLink="https://al-rowad-dental-center.vercel.app/"
       />
        <ProjectCard
          src="/project02.png"
          title="Movies App"
          description="A website for displaying films with a list of favorite films, a page for displaying the film, and special details about it."
          projectLink="https://topmovies00.netlify.app/"
        />
        <ProjectCard
          src="/totoStore.png"
          title="Toto Store"
          description="E-commerce website that sells men's and women's clothing and accessories using Next.js , Firebase and other libraries."
          projectLink="https://totostore.vercel.app/"
        />
        <ProjectCard
          src="/tismPro.png"
          title="TSIM pro"
          description="Portfolio of Saudi Tasm Company is a company specialized in equipping horse arenas and flooring using React.js and other libraries."
          projectLink="https://tism1.vercel.app/"
        />
         <ProjectCard
          src="/myPortfolio.png"
          title="My Portfolio"
          description="Portfolio for me."
          projectLink="https://abdelra7m2n.netlify.app/"
        />
      </div> 
    </div>
  );
};

export default Projects;
