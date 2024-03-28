import Navbar from "@/components/appbased/navbar";
import React from "react";

function ProjectsLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}

export default ProjectsLayout;
