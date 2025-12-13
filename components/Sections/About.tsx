import React from 'react';
import { PERSONAL_INFO } from '../../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative flex justify-center">
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
            <span className="text-primary-400 font-mono text-lg">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                <span className="text-emerald-500">##</span> About Me
            </h2>
            <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content as Markdown */}
          <div className="order-2 md:order-1 bg-[#0d1117] p-8 rounded-lg border border-slate-800 font-mono text-sm md:text-base leading-relaxed text-slate-400 shadow-xl relative group">
             {/* Line Numbers */}
             <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-slate-800 bg-slate-900/50 rounded-l-lg text-slate-700 text-xs flex flex-col items-center pt-8 select-none">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
             </div>

             <div className="pl-6 space-y-4">
                <p>
                  <span className="text-purple-400">class</span> <span className="text-yellow-400">Janvii</span> <span className="text-purple-400">extends</span> <span className="text-yellow-400">Engineer</span> {'{'}
                </p>
                <div className="pl-4 space-y-4">
                    <p>
                    <span className="text-slate-500">// I enjoy creating things that live on the internet.</span><br/>
                    Hello! My name is <span className="text-primary-400">{PERSONAL_INFO.name}</span>. 
                    My interest in web development started back in college when I decided to hack together some custom themes.
                    </p>
                    <p>
                    Currently, I am a <span className="text-emerald-400">Computer Science Engineering student</span>.
                    I've had the privilege of building software for a student club, a start-up, and large-scale research projects.
                    </p>
                    <p>
                    <span className="text-purple-400">this</span>.focus = [<br/>
                    &nbsp;&nbsp;<span className="text-orange-300">'Scalable Backends'</span>,<br/>
                    &nbsp;&nbsp;<span className="text-orange-300">'Generative AI'</span>,<br/>
                    &nbsp;&nbsp;<span className="text-orange-300">'System Design'</span><br/>
                    ];
                    </p>
                </div>
                <p>{'}'}</p>
             </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                <div className="absolute inset-0 border-2 border-primary-500/50 rounded-lg translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative w-full h-full rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-[#0d1117] border border-slate-700">
                    <div className="absolute inset-0 bg-primary-500/20 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
                    <img 
                        src="https://picsum.photos/seed/dev_terminal/500/500" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                    />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;