function ProjectsSection() {
  const projectsData = [
    {
      'title': 'Password generator',
      'description': 'A simple password generator with words in french',
      'link': 'https://t0mspace.github.io/french_password_generator',
      'technologies': ['javascript']
    }
  ];

  return (
    <div id="projects" className="projects-section max-w-3xl mx-auto">
      <h2 className="text-4xl mb-16 font-bold text-center">Projects</h2>
      <div className="flex flex-wrap gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-black/.9 backdrop-blur-xl p-8 text-gray-200 bg-slate-100/100 bg-opacity-100 dark:bg-slate-700/30 rounded-2xl border border-slate-500/20 dark:border-slate-600/30 shadow-lg transform duration-300 cursor-pointer flex flex-col justify-between"
          >
            <header>
              <h3 className="pb-4 font-semibold text-lg">
                <a href={project.link} className="group-hover:text-primary-dark group-hover:dark:text-primary-light" target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="text-muted-dark dark:text-muted">{project.description}</p>
            </header>
            <footer>
              <ul className="flex space-x-3 mt-4">
                <li>
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label="Live">
                    <svg className="remixicon-icon" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
