import React from 'react';
import { GitCommit, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative flex justify-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary-400 font-mono text-lg">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
             <span className="text-emerald-500">git</span> log
          </h2>
          <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div className="relative pl-4 md:pl-0">
          {/* Vertical Git Line */}
          <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node - Centered on Desktop */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 flex items-center justify-center bg-[#09090b] border border-slate-800 rounded-full z-10 group">
                    <div className="w-3 h-3 rounded-full bg-slate-600 group-hover:bg-primary-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all"></div>
                </div>

                {/* Content Box */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-[#0d1117] p-6 rounded-lg border border-slate-800 hover:border-primary-500/30 transition-all group">
                        <div className={`flex flex-col mb-4 ${index % 2 === 0 ? 'items-start' : 'items-start md:items-end'}`}>
                            <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                                {exp.role} 
                                <span className="text-primary-500 text-sm font-normal">@ {exp.company}</span>
                            </h3>
                            <div className="flex items-center text-xs font-mono text-slate-500 mt-1">
                                <GitCommit className="w-3 h-3 mr-1" />
                                {exp.period}
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed font-mono">
                            {exp.description}
                        </p>
                    </div>
                </div>

                {/* Spacer for other side on desktop */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;