import React from 'react';
import { Github, ExternalLink, Folder, Star, GitFork } from 'lucide-react';
import { PROJECTS } from '../../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative flex justify-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary-400 font-mono text-lg">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
             ./featured_projects
          </h2>
          <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#0d1117] rounded border border-slate-800 p-6 flex flex-col hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_4px_20px_-10px_rgba(34,211,238,0.2)]"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-8 h-8 text-primary-500/80" />
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-400 transition-colors mb-2 font-mono">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-mono text-xs">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto text-xs font-mono text-slate-500">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 mr-2"></span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a 
             href="https://github.com/JARVIS-28" 
             target="_blank"
             rel="noreferrer"
             className="inline-block px-8 py-3 border border-dashed border-slate-600 text-slate-400 font-mono text-sm rounded hover:bg-white/5 hover:border-primary-500 hover:text-primary-400 transition-colors"
            >
              View all repositories @github
           </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;