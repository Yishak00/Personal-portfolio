import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-center bg-gray-900">
      <h2 className="text-3xl font-bold text-yellow-500 mb-8 animate-pulse">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Example of a project card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img src="/proj.png" alt="Project" className="w-full h-40 object-cover rounded" />
          <h3 className="mt-4 text-xl font-semibold">Project Title</h3>
          <p className="mt-2 text-gray-400">Brief description of the project.</p>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
}

export default Projects;
